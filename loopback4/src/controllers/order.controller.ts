import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import { Order } from '../models';
import { OrderRepository } from '../repositories';
import { CreatePaymentIntentDTO, OrderCreateDTO } from '../dtos';
import { Blob } from 'buffer';

export class OrderController {
  constructor(
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
  ) { }

  @post('/orders')
  @response(200, {
    description: 'Order model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Order) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderCreateDTO, {
            title: 'NewOrder',
            exclude: ['id'],
          }),
        },
      },
    })
    order: Omit<OrderCreateDTO, 'id'>,
  ): Promise<Order> {
    console.log('order')
    return this.orderRepository.customCreate(order);
  }

  @get('/orders/get-invoice/{id}')
  @response(200, {
    description: 'Order model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Blob) } },
  })
  async getInvoiceByOrderId(
    @param.path.string('id') id: string,
  ): Promise<Blob> {
    return this.orderRepository.getInvoiceFromOrderId(id);
  }

  @get('/orders/count')
  @response(200, {
    description: 'Order model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Order) where?: Where<Order>,
  ): Promise<Count> {
    return this.orderRepository.count(where);
  }

  @get('/orders')
  @response(200, {
    description: 'Array of Order model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Order, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Order) filter?: Filter<Order>,
  ): Promise<Order[]> {
    return this.orderRepository.find(filter);
  }

  @patch('/orders')
  @response(200, {
    description: 'Order PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, { partial: true }),
        },
      },
    })
    order: Order,
    @param.where(Order) where?: Where<Order>,
  ): Promise<Count> {
    return this.orderRepository.updateAll(order, where);
  }

  @get('/orders/{id}')
  @response(200, {
    description: 'Order model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Order, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Order, { exclude: 'where' }) filter?: FilterExcludingWhere<Order>
  ): Promise<Order> {
    return this.orderRepository.findById(id, filter);
  }

  @patch('/orders/{id}')
  @response(204, {
    description: 'Order PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, { partial: true }),
        },
      },
    })
    order: Order,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders/{id}')
  @response(204, {
    description: 'Order PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() order: Order,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders/{id}')
  @response(204, {
    description: 'Order DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.orderRepository.deleteById(id);
  }

  @post('/orders/intent')
  @response(200, {
    description: 'Order model instance',
    content: { 'application/json': { schema: String } },
  })
  async createIntent(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CreatePaymentIntentDTO),
        },
      },
    })
    body: CreatePaymentIntentDTO,
  ): Promise<string> {
    return this.orderRepository.createPaymentIntent(body.amount);
  }
}
