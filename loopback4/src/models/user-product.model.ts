import {Entity, model, property} from '@loopback/repository';

@model()
export class UserProduct extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<UserProduct>) {
    super(data);
  }
}

export interface UserProductRelations {
  // describe navigational properties here
}

export type UserProductWithRelations = UserProduct & UserProductRelations;
