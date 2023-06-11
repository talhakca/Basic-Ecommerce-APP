import { inject, Getter } from '@loopback/core';
import { DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { ELearningDataSource } from '../datasources';
import { Order, OrderRelations, Cart, User, Address, Product, CartWithRelations } from '../models';
import { CartRepository } from './cart.repository';
import { UserRepository } from './user.repository';
import { AddressRepository } from './address.repository';
import { HttpErrors } from '@loopback/rest';
import { ProductRepository } from './product.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {

  public readonly orderedProducts: HasManyRepositoryFactory<Cart, typeof Order.prototype.id>;

  public readonly user: BelongsToAccessor<User, typeof Order.prototype.id>;

  public readonly address: BelongsToAccessor<Address, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.ELearningDataSource')
    dataSource: ELearningDataSource,
    @repository.getter('CartRepository') protected cartRepositoryGetter: Getter<CartRepository>,
    @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
    @repository.getter('AddressRepository') protected addressRepositoryGetter: Getter<AddressRepository>,
    @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(Order, dataSource);
    this.address = this.createBelongsToAccessorFor('address', addressRepositoryGetter,);
    this.registerInclusionResolver('address', this.address.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
    this.orderedProducts = this.createHasManyRepositoryFactoryFor('orderedProducts', cartRepositoryGetter,);
    this.registerInclusionResolver('orderedProducts', this.orderedProducts.inclusionResolver);
  }
  async createPaymentIntent(amount: number) {
    const stripe = require('stripe')('sk_test_51NFvUxKhHK35k6aqMr2mf7OuZkRlV55GNWXdpDL9kZDPEZvZfOS01rnmNSjZknDmoqlnCyB5yvufVIC1CBeeT8I200Hywq3bYF');

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
      statement_descriptor: 'Custom descriptor',
    });
    return paymentIntent as string;
  }

  async getInvoiceFromOrderId(orderId: string) {
    const fs = require('fs');
    const path = `/Users/talhaakca/Desktop/cagan-ecommerce/loopback4/pdfs/${orderId}.pdf`;
    const data = await fs.readFile(path, (err: any, data: any) => {
      if (err) {
        console.error(err);
      }
      if (data) {
        return data
      }
      // file written successfully
    });
    return data;
  }

  async customCreate(body: any): Promise<Order> {
    if (!body.paymentId) {
      throw new HttpErrors[401]('payment id is required');
    }

    const cartItems = body.orderedProducts;
    delete body.orderedProducts;

    const order = await this.create({ ...body, status: 'processing' });
    if (order) {
      const cartRepository = await this.cartRepositoryGetter();
      const productRepository = await this.productRepositoryGetter();
      for (let cartItem of cartItems) {
        const fixedPrice = cartItem.product?.discountRate ? (cartItem.product.price * cartItem.product.discountRate / 100) : cartItem.product.price
        cartRepository.updateById(cartItem.id, { orderId: order.id, price: fixedPrice });
        productRepository.updateById(cartItem.productId, { quantityInStocks: cartItem.product.quantityInStocks - 1 });
      }
      this.generatePDFFromOrder(cartItems, order.id, order.userId);
      return order;
    } else {
      throw new HttpErrors[400]('order couldnot proceeded.');
    }
  }

  generatePDFFromOrder(cartItems: CartWithRelations[], orderId: string, userId: string) {
    console.log(cartItems)
    var html_to_pdf = require('html-pdf-node');

    let options = { format: 'A4' };
    // Example of options with args //
    // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };
    const html = this.getHTMLFromOrderForInvoice(cartItems);
    let file = { content: html };

    html_to_pdf.generatePdf(file, options).then((pdfBuffer: any) => {
      const fs = require('fs');
      const path = `/Users/talhaakca/Desktop/cagan-ecommerce/loopback4/pdfs/${orderId}.pdf`;
      fs.writeFile(path, pdfBuffer, (err: any) => {
        if (err) {
          console.error(err);
        }
        this.sendMail(path, userId)
        // file written successfully
      });
    });
  }

  async sendMail(pdfPath: string, userId: string) {
    const userRepository = await this.userRepositoryGetter();
    const user = await userRepository.findById(userId);
    const email = user.email;
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hayrettinsendag@gmail.com',
        pass: 'maqnjrgkkmrmubxb'
      }
    });

    var mailOptions = {
      from: 'hayrettinsendag@gmail.com',
      to: email,
      subject: 'Invoice',
      text: 'Thank you for choosing us. We have attached your invoice.',
      attachments: [{
        filename: 'invoice.pdf',
        path: pdfPath,
        contentType: 'application/pdf'
      }]
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  getProductHtml(cartItems: CartWithRelations[]) {
    return cartItems.map((cart: CartWithRelations) => {
      return `
      <div style="width: 400px; display:flex; justify-content: space-between;">
      <div>
       ${cart.product.name}
      </div>
      <div>
       Price: ${cart.product?.discountRate ? ((cart.product.price as number) * cart.product.discountRate / 100) : cart.product.price}
      </div>
    </div>`
    })
  }

  getHTMLFromOrderForInvoice(cartItems: CartWithRelations[]) {
    return `
    <!DOCTYPE html>
<html lang="en">
<body>
 <h3>Ordered Products</h3>
  <hr class="solid">
      ${this.getProductHtml(cartItems)}
      <hr class="solid">
      <div>
        Total: ${cartItems?.reduce((acc, cur) => {
      acc = (cur.product?.discountRate ? ((cur.product.price as number) * cur.product.discountRate / 100) : cur.product.price) as number + acc;
      return acc;
    }, 0)}$
      </div>
  </body>
  </html>
    `
  }

}
