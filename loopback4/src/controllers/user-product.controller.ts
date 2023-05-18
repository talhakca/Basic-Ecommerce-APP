import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {UserProduct} from '../models';
import {UserProductRepository} from '../repositories';

export class UserProductController {
  constructor(
    @repository(UserProductRepository)
    public userProductRepository : UserProductRepository,
  ) {}

  @post('/user-products')
  @response(200, {
    description: 'UserProduct model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserProduct)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserProduct, {
            title: 'NewUserProduct',
            exclude: ['id'],
          }),
        },
      },
    })
    userProduct: Omit<UserProduct, 'id'>,
  ): Promise<UserProduct> {
    return this.userProductRepository.create(userProduct);
  }

  @get('/user-products/count')
  @response(200, {
    description: 'UserProduct model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserProduct) where?: Where<UserProduct>,
  ): Promise<Count> {
    return this.userProductRepository.count(where);
  }

  @get('/user-products')
  @response(200, {
    description: 'Array of UserProduct model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserProduct, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserProduct) filter?: Filter<UserProduct>,
  ): Promise<UserProduct[]> {
    return this.userProductRepository.find(filter);
  }

  @patch('/user-products')
  @response(200, {
    description: 'UserProduct PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserProduct, {partial: true}),
        },
      },
    })
    userProduct: UserProduct,
    @param.where(UserProduct) where?: Where<UserProduct>,
  ): Promise<Count> {
    return this.userProductRepository.updateAll(userProduct, where);
  }

  @get('/user-products/{id}')
  @response(200, {
    description: 'UserProduct model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserProduct, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserProduct, {exclude: 'where'}) filter?: FilterExcludingWhere<UserProduct>
  ): Promise<UserProduct> {
    return this.userProductRepository.findById(id, filter);
  }

  @patch('/user-products/{id}')
  @response(204, {
    description: 'UserProduct PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserProduct, {partial: true}),
        },
      },
    })
    userProduct: UserProduct,
  ): Promise<void> {
    await this.userProductRepository.updateById(id, userProduct);
  }

  @put('/user-products/{id}')
  @response(204, {
    description: 'UserProduct PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userProduct: UserProduct,
  ): Promise<void> {
    await this.userProductRepository.replaceById(id, userProduct);
  }

  @del('/user-products/{id}')
  @response(204, {
    description: 'UserProduct DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userProductRepository.deleteById(id);
  }
}
