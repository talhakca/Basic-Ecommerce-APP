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
  Wishlist,
User,
Product,
} from '../models';
import {
  WishlistRepository,
} from '../repositories';


@intercept(PreControls)
export class WishlistController {

  constructor(
    @repository(WishlistRepository)
    public wishlistRepository: WishlistRepository,
  ) { }

  

  @post('/wishlists')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Wishlist, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Wishlist, {
  title: 'NewWishlist',
  exclude: ['id',],
  })}
        }
      })
      body:Wishlist,
    ): Promise<Wishlist> {
    return this.wishlistRepository.create(body);
    }
  

  @get('/wishlists')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(Wishlist, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(Wishlist) filter?: Filter<Wishlist>,
      ): Promise<Wishlist[]> {
    return this.wishlistRepository.find(filter);
    }
  

  @get('/wishlists/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Wishlist, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Wishlist, { exclude: 'where' }) filter?: FilterExcludingWhere<Wishlist>,
      ): Promise<Wishlist> {
    return this.wishlistRepository.findById(id, filter);
    }
  

  @patch('/wishlists/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Wishlist, {
  partial: true,
  })}
        }
      })
      body:Partial<Wishlist>,
    ): Promise<void> {
    return this.wishlistRepository.updateById(id, body);
    }
  

  @patch('/wishlists')
  @response(200, {
    description: 'update every data',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Count, {
  })
        }
    },
    })
  async updateAll(
    @requestBody({
        content: {
          'application/json': {
            schema:{
                type: 'array',
                items:getModelSchemaRef(Wishlist, {
  partial: true,
  })}}
        }
      })
      body:Partial<Wishlist>,
    @param.where(Wishlist) where?: Where<Wishlist>,
      ): Promise<Count> {
    return this.wishlistRepository.updateAll(body, where);
    }
  

  @put('/wishlists/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Wishlist, {
  })}
        }
      })
      body:Wishlist,
    ): Promise<void> {
    return this.wishlistRepository.replaceById(id, body);
    }
  

  @del('/wishlists/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.wishlistRepository.deleteById(id);
    }
  

  @get('/wishlists/count')
  @response(200, {
    description: 'count each instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Count, {
  })
        }
    },
    })
  async count(
    @param.where(Wishlist) where?: Where<Wishlist>,
      ): Promise<Count> {
    return this.wishlistRepository.count(where);
    }
  

  @get('/wishlists/{id}/product')
  @response(200, {
    content: {
      'application/json': {
        schema:getModelSchemaRef(Product, {
  })
        }
    },
    })
  async findProduct(
    @param.path.string('id') id: string,
    ): Promise<Product> {
    return this.wishlistRepository.product(id);
    }
  

  @get('/wishlists/{id}/user')
  @response(200, {
    content: {
      'application/json': {
        schema:getModelSchemaRef(User, {
  })
        }
    },
    })
  async findUser(
    @param.path.string('id') id: string,
    ): Promise<User> {
    return this.wishlistRepository.user(id);
    }
  
}