import { model, property } from '@loopback/repository';
import { Cart, Order } from '../models';

@model()
export class OrderCreateDTO extends Order {

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  orderedProducts: Cart[];

}
