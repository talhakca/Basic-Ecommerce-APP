import { inject, Getter } from '@loopback/core';
import { DefaultCrudRepository, repository, BelongsToAccessor } from '@loopback/repository';
import { ELearningDataSource } from '../datasources';
import { Cart, CartRelations, User, Product, CartWithRelations } from '../models';
import { UserRepository } from './user.repository';
import { ProductRepository } from './product.repository';

export class CartRepository extends DefaultCrudRepository<
  Cart,
  typeof Cart.prototype.id,
  CartRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Cart.prototype.id>;

  public readonly product: BelongsToAccessor<Product, typeof Cart.prototype.id>;

  constructor(
    @inject('datasources.ELearningDataSource') dataSource: ELearningDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(Cart, dataSource);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter,);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }

  async customUpdate(id: string, updatedCart: Cart) {
    await this.updateById(id, updatedCart);
    if (updatedCart.refundStatus === 'APPROVED') {
      const cart = await this.findById(id);
      if (cart) {
        const productRepository = await this.productRepositoryGetter();
        const product = await productRepository.findById(cart.productId);
        if (product) {
          productRepository.updateById(product.id, { quantityInStocks: product.quantityInStocks + 1 })
        }
      }

    }
  }
}
