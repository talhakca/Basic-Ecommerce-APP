import { Entity, model, property } from '@loopback/repository';

@model()
export class Address extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  street: string;

  @property({
    type: 'string',
    required: false,
    jsonSchema: { nullable: true }
  })
  street2: string;

  @property({
    type: 'string',
  })
  details?: string;

  @property({
    type: 'string',
    required: true
  })
  title: string;

  @property({
    type: 'string',
  })
  userId?: string;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
