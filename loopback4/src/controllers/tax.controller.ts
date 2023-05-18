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
  Tax,
} from '../models';
import {
  TaxRepository,
} from '../repositories';


@intercept(PreControls)
export class TaxController {

  constructor(
    @repository(TaxRepository)
    public taxRepository: TaxRepository,
  ) { }

  

  @post('/taxes')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Tax, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Tax, {
  title: 'NewTax',
  exclude: ['id',],
  })}
        }
      })
      body:Tax,
    ): Promise<Tax> {
    return this.taxRepository.create(body);
    }
  

  @get('/taxes')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(Tax, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(Tax) filter?: Filter<Tax>,
      ): Promise<Tax[]> {
    return this.taxRepository.find(filter);
    }
  

  @get('/taxes/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Tax, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tax, { exclude: 'where' }) filter?: FilterExcludingWhere<Tax>,
      ): Promise<Tax> {
    return this.taxRepository.findById(id, filter);
    }
  

  @patch('/taxes/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Tax, {
  partial: true,
  })}
        }
      })
      body:Partial<Tax>,
    ): Promise<void> {
    return this.taxRepository.updateById(id, body);
    }
  

  @patch('/taxes')
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
                items:getModelSchemaRef(Tax, {
  partial: true,
  })}}
        }
      })
      body:Partial<Tax>,
    @param.where(Tax) where?: Where<Tax>,
      ): Promise<Count> {
    return this.taxRepository.updateAll(body, where);
    }
  

  @put('/taxes/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Tax, {
  })}
        }
      })
      body:Tax,
    ): Promise<void> {
    return this.taxRepository.replaceById(id, body);
    }
  

  @del('/taxes/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.taxRepository.deleteById(id);
    }
  

  @get('/taxes/count')
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
    @param.where(Tax) where?: Where<Tax>,
      ): Promise<Count> {
    return this.taxRepository.count(where);
    }
  
}