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
  Distributor,
} from '../models';
import {
  DistributorRepository,
} from '../repositories';


@intercept(PreControls)
export class DistributorController {

  constructor(
    @repository(DistributorRepository)
    public distributorRepository: DistributorRepository,
  ) { }

  

  @post('/distributors')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Distributor, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Distributor, {
  title: 'NewDistributor',
  exclude: ['id',],
  })}
        }
      })
      body:Distributor,
    ): Promise<Distributor> {
    return this.distributorRepository.create(body);
    }
  

  @get('/distributors')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(Distributor, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(Distributor) filter?: Filter<Distributor>,
      ): Promise<Distributor[]> {
    return this.distributorRepository.find(filter);
    }
  

  @get('/distributors/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Distributor, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Distributor, { exclude: 'where' }) filter?: FilterExcludingWhere<Distributor>,
      ): Promise<Distributor> {
    return this.distributorRepository.findById(id, filter);
    }
  

  @patch('/distributors/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Distributor, {
  partial: true,
  })}
        }
      })
      body:Partial<Distributor>,
    ): Promise<void> {
    return this.distributorRepository.updateById(id, body);
    }
  

  @patch('/distributors')
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
                items:getModelSchemaRef(Distributor, {
  partial: true,
  })}}
        }
      })
      body:Partial<Distributor>,
    @param.where(Distributor) where?: Where<Distributor>,
      ): Promise<Count> {
    return this.distributorRepository.updateAll(body, where);
    }
  

  @put('/distributors/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Distributor, {
  })}
        }
      })
      body:Distributor,
    ): Promise<void> {
    return this.distributorRepository.replaceById(id, body);
    }
  

  @del('/distributors/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.distributorRepository.deleteById(id);
    }
  

  @get('/distributors/count')
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
    @param.where(Distributor) where?: Where<Distributor>,
      ): Promise<Count> {
    return this.distributorRepository.count(where);
    }
  
}