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
  RefundRequest,
} from '../models';
import {
  RefundRequestRepository,
} from '../repositories';


@intercept(PreControls)
export class RefundRequestController {

  constructor(
    @repository(RefundRequestRepository)
    public refundRequestRepository: RefundRequestRepository,
  ) { }

  

  @post('/refund-requests')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(RefundRequest, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(RefundRequest, {
  title: 'NewRefundRequest',
  exclude: ['id',],
  })}
        }
      })
      body:RefundRequest,
    ): Promise<RefundRequest> {
    return this.refundRequestRepository.create(body);
    }
  

  @get('/refund-requests')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(RefundRequest, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(RefundRequest) filter?: Filter<RefundRequest>,
      ): Promise<RefundRequest[]> {
    return this.refundRequestRepository.find(filter);
    }
  

  @get('/refund-requests/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(RefundRequest, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RefundRequest, { exclude: 'where' }) filter?: FilterExcludingWhere<RefundRequest>,
      ): Promise<RefundRequest> {
    return this.refundRequestRepository.findById(id, filter);
    }
  

  @patch('/refund-requests/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(RefundRequest, {
  partial: true,
  })}
        }
      })
      body:Partial<RefundRequest>,
    ): Promise<void> {
    return this.refundRequestRepository.updateById(id, body);
    }
  

  @patch('/refund-requests')
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
                items:getModelSchemaRef(RefundRequest, {
  partial: true,
  })}}
        }
      })
      body:Partial<RefundRequest>,
    @param.where(RefundRequest) where?: Where<RefundRequest>,
      ): Promise<Count> {
    return this.refundRequestRepository.updateAll(body, where);
    }
  

  @put('/refund-requests/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(RefundRequest, {
  })}
        }
      })
      body:RefundRequest,
    ): Promise<void> {
    return this.refundRequestRepository.replaceById(id, body);
    }
  

  @del('/refund-requests/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.refundRequestRepository.deleteById(id);
    }
  

  @get('/refund-requests/count')
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
    @param.where(RefundRequest) where?: Where<RefundRequest>,
      ): Promise<Count> {
    return this.refundRequestRepository.count(where);
    }
  
}