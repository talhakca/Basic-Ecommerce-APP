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
  Category,
} from '../models';
import {
  CategoryRepository,
} from '../repositories';


@intercept(PreControls)
export class CategoryController {

  constructor(
    @repository(CategoryRepository)
    public categoryRepository: CategoryRepository,
  ) { }

  

  @post('/categories')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Category, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Category, {
  title: 'NewCategory',
  exclude: ['id',],
  })}
        }
      })
      body:Category,
    ): Promise<Category> {
    return this.categoryRepository.create(body);
    }
  

  @get('/categories')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(Category, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(Category) filter?: Filter<Category>,
      ): Promise<Category[]> {
    return this.categoryRepository.find(filter);
    }
  

  @get('/categories/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Category, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Category, { exclude: 'where' }) filter?: FilterExcludingWhere<Category>,
      ): Promise<Category> {
    return this.categoryRepository.findById(id, filter);
    }
  

  @patch('/categories/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Category, {
  partial: true,
  })}
        }
      })
      body:Partial<Category>,
    ): Promise<void> {
    return this.categoryRepository.updateById(id, body);
    }
  

  @patch('/categories')
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
                items:getModelSchemaRef(Category, {
  partial: true,
  })}}
        }
      })
      body:Partial<Category>,
    @param.where(Category) where?: Where<Category>,
      ): Promise<Count> {
    return this.categoryRepository.updateAll(body, where);
    }
  

  @put('/categories/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Category, {
  })}
        }
      })
      body:Category,
    ): Promise<void> {
    return this.categoryRepository.replaceById(id, body);
    }
  

  @del('/categories/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.categoryRepository.deleteById(id);
    }
  

  @get('/categories/count')
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
    @param.where(Category) where?: Where<Category>,
      ): Promise<Count> {
    return this.categoryRepository.count(where);
    }
  
}