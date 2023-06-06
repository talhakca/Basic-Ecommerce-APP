import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Cart } from './cart.model';
import { User } from './user.model';
import { Address } from './address.model';

@model()
export class Order extends Entity {
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

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string; //pending approved on delivery

  @property({
    type: 'string',
    required: true,
    unique: true
  })
  paymentId: string;

  @hasMany(() => Cart)
  orderedProducts: Cart[];

  @belongsTo(() => User)
  userId: string;

  @belongsTo(() => Address)
  addressId: string;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
