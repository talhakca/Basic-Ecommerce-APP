import { Entity, belongsTo, model, property } from '@loopback/repository';
import { User } from './user.model';
import { Product } from './product.model';

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

  @belongsTo(() => User)
  userId: string;

  constructor(data?: Partial<Cart>) {
    super(data);
  }
}

export interface CartRelations {
  // describe navigational properties here
}

export type CartWithRelations = Cart & CartRelations;
