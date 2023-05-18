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
  Delivery,
} from '../models';
import {
  DeliveryRepository,
} from '../repositories';


@intercept(PreControls)
export class DeliveryController {

  constructor(
    @repository(DeliveryRepository)
    public deliveryRepository: DeliveryRepository,
  ) { }

  

  @post('/deliveries')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Delivery, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Delivery, {
  title: 'NewDelivery',
  exclude: ['id',],
  })}
        }
      })
      body:Delivery,
    ): Promise<Delivery> {
    return this.deliveryRepository.create(body);
    }
  

  @get('/deliveries')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(Delivery, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(Delivery) filter?: Filter<Delivery>,
      ): Promise<Delivery[]> {
    return this.deliveryRepository.find(filter);
    }
  

  @get('/deliveries/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Delivery, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Delivery, { exclude: 'where' }) filter?: FilterExcludingWhere<Delivery>,
      ): Promise<Delivery> {
    return this.deliveryRepository.findById(id, filter);
    }
  

  @patch('/deliveries/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Delivery, {
  partial: true,
  })}
        }
      })
      body:Partial<Delivery>,
    ): Promise<void> {
    return this.deliveryRepository.updateById(id, body);
    }
  

  @patch('/deliveries')
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
                items:getModelSchemaRef(Delivery, {
  partial: true,
  })}}
        }
      })
      body:Partial<Delivery>,
    @param.where(Delivery) where?: Where<Delivery>,
      ): Promise<Count> {
    return this.deliveryRepository.updateAll(body, where);
    }
  

  @put('/deliveries/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Delivery, {
  })}
        }
      })
      body:Delivery,
    ): Promise<void> {
    return this.deliveryRepository.replaceById(id, body);
    }
  

  @del('/deliveries/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.deliveryRepository.deleteById(id);
    }
  

  @get('/deliveries/count')
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
    @param.where(Delivery) where?: Where<Delivery>,
      ): Promise<Count> {
    return this.deliveryRepository.count(where);
    }
  
}