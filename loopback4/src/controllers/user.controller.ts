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
  User,
Product,
Tax,
Wishlist,
} from '../models';
import {
  UserRepository,
} from '../repositories';


@intercept(PreControls)
export class UserController {

  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  

  @get('/users/{id}/tax')
  @response(200, {
    content: {
      'application/json': {
        schema:getModelSchemaRef(Tax, {
  })
        }
    },
    })
  async findTax(
    @param.path.string('id') id: string,
    ): Promise<Tax> {
    return this.userRepository.tax(id);
    }
  

  @get('/users/{id}/product')
  @response(200, {
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(Product, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async findProducts(
    @param.path.string('id') id: string,
    @param.filter(Product) filter?: Filter<Product>,
      ): Promise<Product[]> {
    return this.userRepository.wishlist(id).find(filter);
    }
  

  @post('/users/{id}/product')
  @response(200, {
    content: {
      'application/json': {
        schema:getModelSchemaRef(Product, {
  })
        }
    },
    })
  async createProduct(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Product, {
  })}
        }
      })
      body:Product,
    ): Promise<Product> {
    return this.userRepository.wishlist(id).create(body);
    }
  

  @patch('/users/{id}/product')
  @response(200, {
    content: {
      'application/json': {
        schema:getModelSchemaRef(Count, {
  })
        }
    },
    })
  async patchProduct(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Product, {
  partial: true,
  })}
        }
      })
      body:Partial<Product>,
    @param.where(Product) where?: Where<Product>,
      ): Promise<Count> {
    return this.userRepository.wishlist(id).patch(body, where);
    }
  

  @del('/users/{id}/product')
  @response(200, {
    content: {
      'application/json': {
        schema:getModelSchemaRef(Count, {
  })
        }
    },
    })
  async deleteProduct(
    @param.path.string('id') id: string,
    @param.where(Product) where?: Where<Product>,
      ): Promise<Count> {
    return this.userRepository.wishlist(id).delete(where);
    }
  
}