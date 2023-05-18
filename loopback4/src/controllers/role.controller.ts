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
  Role,
} from '../models';
import {
  RoleRepository,
} from '../repositories';


@intercept(PreControls)
export class RoleController {

  constructor(
    @repository(RoleRepository)
    public roleRepository: RoleRepository,
  ) { }

  

  @post('/roles')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Role, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Role, {
  title: 'NewRole',
  exclude: ['id',],
  })}
        }
      })
      body:Role,
    ): Promise<Role> {
    return this.roleRepository.create(body);
    }
  

  @get('/roles')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(Role, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(Role) filter?: Filter<Role>,
      ): Promise<Role[]> {
    return this.roleRepository.find(filter);
    }
  

  @get('/roles/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Role, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Role, { exclude: 'where' }) filter?: FilterExcludingWhere<Role>,
      ): Promise<Role> {
    return this.roleRepository.findById(id, filter);
    }
  

  @patch('/roles/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Role, {
  partial: true,
  })}
        }
      })
      body:Partial<Role>,
    ): Promise<void> {
    return this.roleRepository.updateById(id, body);
    }
  

  @patch('/roles')
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
                items:getModelSchemaRef(Role, {
  partial: true,
  })}}
        }
      })
      body:Partial<Role>,
    @param.where(Role) where?: Where<Role>,
      ): Promise<Count> {
    return this.roleRepository.updateAll(body, where);
    }
  

  @put('/roles/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Role, {
  })}
        }
      })
      body:Role,
    ): Promise<void> {
    return this.roleRepository.replaceById(id, body);
    }
  

  @del('/roles/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.roleRepository.deleteById(id);
    }
  

  @get('/roles/count')
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
    @param.where(Role) where?: Where<Role>,
      ): Promise<Count> {
    return this.roleRepository.count(where);
    }
  
}