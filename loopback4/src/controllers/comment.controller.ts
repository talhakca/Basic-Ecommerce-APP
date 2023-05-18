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
  Comment,
Product,
} from '../models';
import {
  CommentRepository,
} from '../repositories';


@intercept(PreControls)
export class CommentController {

  constructor(
    @repository(CommentRepository)
    public commentRepository: CommentRepository,
  ) { }

  

  @post('/comments')
  @response(200, {
    description: 'create new instance',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Comment, {
  })
        }
    },
    })
  async create(
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Comment, {
  title: 'NewComment',
  exclude: ['id',],
  })}
        }
      })
      body:Comment,
    ): Promise<Comment> {
    return this.commentRepository.create(body);
    }
  

  @get('/comments')
  @response(200, {
    description: 'get instances',
    content: {
      'application/json': {
        schema:{ 
          type: 'array',
          items: getModelSchemaRef(Comment, {
  includeRelations: true,
  })
        }
        }
    },
    })
  async find(
    @param.filter(Comment) filter?: Filter<Comment>,
      ): Promise<Comment[]> {
    return this.commentRepository.find(filter);
    }
  

  @get('/comments/{id}')
  @response(200, {
    description: 'get instance by id',
    content: {
      'application/json': {
        schema:getModelSchemaRef(Comment, {
  includeRelations: true,
  })
        }
    },
    })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Comment, { exclude: 'where' }) filter?: FilterExcludingWhere<Comment>,
      ): Promise<Comment> {
    return this.commentRepository.findById(id, filter);
    }
  

  @patch('/comments/{id}')
  @response(204, {
    description: 'update instances by id',
    })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Comment, {
  partial: true,
  })}
        }
      })
      body:Partial<Comment>,
    ): Promise<void> {
    return this.commentRepository.updateById(id, body);
    }
  

  @patch('/comments')
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
                items:getModelSchemaRef(Comment, {
  partial: true,
  })}}
        }
      })
      body:Partial<Comment>,
    @param.where(Comment) where?: Where<Comment>,
      ): Promise<Count> {
    return this.commentRepository.updateAll(body, where);
    }
  

  @put('/comments/{id}')
  @response(204, {
    description: 'replace instances by id',
    })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
        content: {
          'application/json': {
            schema:getModelSchemaRef(Comment, {
  })}
        }
      })
      body:Comment,
    ): Promise<void> {
    return this.commentRepository.replaceById(id, body);
    }
  

  @del('/comments/{id}')
  @response(204, {
    description: 'delete instance by id',
    })
  async deleteById(
    @param.path.string('id') id: string,
    ): Promise<void> {
    return this.commentRepository.deleteById(id);
    }
  

  @get('/comments/count')
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
    @param.where(Comment) where?: Where<Comment>,
      ): Promise<Count> {
    return this.commentRepository.count(where);
    }
  

  @get('/comments/{id}/product')
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
    return this.commentRepository.commentOwner(id);
    }
  
}