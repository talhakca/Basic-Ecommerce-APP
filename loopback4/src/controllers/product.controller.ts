import {
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  put,
  del,
  getModelSchemaRef,
  getWhereSchemaFor,
  requestBody,
  response,
} from '@loopback/rest';
import { inject, intercept } from '@loopback/core';
import { PreControls } from '../interceptors';
import { Count } from '../dtos';

import {
  Product,
  Distributor,
  Category,
  ProductCategory,
} from '../models';
import {
  ProductRepository,
} from '../repositories';


@intercept(PreControls)
export class ProductController {

  constructor(
    @repository(ProductRepository)
    public productRepository: ProductRepository,
  ) { }



  @post('/products')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Product, {
        })
      }
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {
            title: 'NewProduct',
            exclude: ['id',],
          })
        }
      }
    })
    body: Product,
  ): Promise<Product> {
    return this.productRepository.create(body);
  }


  @get('/products')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Product, {
            includeRelations: true,
          })
        }
      }
    },
  })
  async find(
    @param.filter(Product) filter?: Filter<Product>,
  ): Promise<Product[]> {
    return this.productRepository.find(filter);
  }


  @get('/products/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Product, {
          includeRelations: true,
        })
      }
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Product, { exclude: 'where' }) filter?: FilterExcludingWhere<Product>,
  ): Promise<Product> {
    return this.productRepository.findById(id, filter);
  }


  @patch('/products/{id}')
  @response(204, {
    description: 'update instances by id',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {
            partial: true,
          })
        }
      }
    })
    body: Partial<Product>,
  ): Promise<void> {
    return this.productRepository.updateById(id, body);
  }


  @patch('/products')
  @response(200, {
    description: 'update every data',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Count, {
        })
      }
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: getModelSchemaRef(Product, {
              partial: true,
            })
          }
        }
      }
    })
    body: Partial<Product>,
    @param.where(Product) where?: Where<Product>,
  ): Promise<Count> {
    return this.productRepository.updateAll(body, where);
  }


  @put('/products/{id}')
  @response(204, {
    description: 'replace instances by id',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {
          })
        }
      }
    })
    body: Product,
  ): Promise<void> {
    return this.productRepository.replaceById(id, body);
  }


  @del('/products/{id}')
  @response(204, {
    description: 'delete instance by id',
  })
  async deleteById(
    @param.path.string('id') id: string,
  ): Promise<void> {
    return this.productRepository.deleteById(id);
  }


  @get('/products/count')
  @response(200, {
    description: 'count each instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Count, {
        })
      }
    },
  })
  async count(
    @param.where(Product) where?: Where<Product>,
  ): Promise<Count> {
    return this.productRepository.count(where);
  }

}