import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cart,
  Product,
} from '../models';
import {CartRepository} from '../repositories';

export class CartProductController {
  constructor(
    @repository(CartRepository)
    public cartRepository: CartRepository,
  ) { }

  @get('/carts/{id}/product', {
    responses: {
      '200': {
        description: 'Product belonging to Cart',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async getProduct(
    @param.path.string('id') id: typeof Cart.prototype.id,
  ): Promise<Product> {
    return this.cartRepository.product(id);
  }
}
