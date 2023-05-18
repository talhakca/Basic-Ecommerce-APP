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
  ProductCategory,
Product,
Category,
} from '../models';
import {
  ProductCategoryRepository,
} from '../repositories';


@intercept(PreControls)
export class ProductCategoryController {

  constructor(
    @repository(ProductCategoryRepository)
    public productCategoryRepository: ProductCategoryRepository,
  ) { }

  

  @post('/product-categories')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(ProductCategory, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(ProductCategory, {
  title: 'NewProductCategory',
  exclude: ['id',],
  })}
        }
      })
      body:ProductCategory,
    ): Promise<ProductCategory> {
    return this.productCategoryRepository.create(body);
    }
  

  @get('/product-categories')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(ProductCategory, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(ProductCategory) filter?: Filter<ProductCategory>,
      ): Promise<ProductCategory[]> {
    return this.productCategoryRepository.find(filter);
    }
  

  @get('/product-categories/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(ProductCategory, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProductCategory, { exclude: 'where' }) filter?: FilterExcludingWhere<ProductCategory>,
      ): Promise<ProductCategory> {
    return this.productCategoryRepository.findById(id, filter);
    }
  

  @patch('/product-categories/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(ProductCategory, {
  partial: true,
  })}
        }
      })
      body:Partial<ProductCategory>,
    ): Promise<void> {
    return this.productCategoryRepository.updateById(id, body);
    }
  

  @patch('/product-categories')
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
                items:getModelSchemaRef(ProductCategory, {
  partial: true,
  })}}
        }
      })
      body:Partial<ProductCategory>,
    @param.where(ProductCategory) where?: Where<ProductCategory>,
      ): Promise<Count> {
    return this.productCategoryRepository.updateAll(body, where);
    }
  

  @put('/product-categories/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(ProductCategory, {
  })}
        }
      })
      body:ProductCategory,
    ): Promise<void> {
    return this.productCategoryRepository.replaceById(id, body);
    }
  

  @del('/product-categories/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.productCategoryRepository.deleteById(id);
    }
  

  @get('/product-categories/count')
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
    @param.where(ProductCategory) where?: Where<ProductCategory>,
      ): Promise<Count> {
    return this.productCategoryRepository.count(where);
    }
  

  @get('/product-categories/{id}/category')
  @response(200, {
    content: {
      'application/json': {
        schema:getModelSchemaRef(Category, {
  })
        }
    },
    })
  async findCategory(
    @param.path.string('id') id: string,
    ): Promise<Category> {
    return this.productCategoryRepository.category(id);
    }
  

  @get('/product-categories/{id}/product')
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
    return this.productCategoryRepository.product(id);
    }
  
}