import { Entity, belongsTo, model, property } from '@loopback/repository';
import { User } from './user.model';
import { Product, ProductWithRelations } from './product.model';

@model()
export class Cart extends Entity {

  @property({
    type: 'string',
    id: true,
    required: true,
    defaultFn: 'uuidv4',
    index: {
      unique: true, // info: not supported for mongodb
    },
  })
  id: string;

  @belongsTo(() => User, {
    keyFrom: 'userId',
    keyTo: 'id',
    name: 'user'
  })
  userId: string;

  @belongsTo(() => Product, {
    keyFrom: 'productId',
    keyTo: 'id',
    name: 'product'
  })
  productId: string;

  @property({
    type: 'string',
  })
  orderId?: string;

  constructor(data?: Partial<Cart>) {
    super(data);
  }
}

export interface CartRelations {
  // describe navigational properties here
  product: ProductWithRelations
}

export type CartWithRelations = Cart & CartRelations;
