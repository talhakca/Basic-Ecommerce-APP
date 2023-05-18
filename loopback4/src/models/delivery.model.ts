import {
  Entity,
  belongsTo,
  hasMany,
  hasOne,
  referencesMany,
  model,
  property
} from '@loopback/repository';



@model({
  settings: {
    strict: false,
    hiddenProperties: [
    ],
    forceId: false,
    validateUpsert: true,
    idInjection: true
  }
})
export class Delivery extends Entity {

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
    type: 'string',
    required: false,
  })
  productId?: string;

  @property({
    type: 'string',
    required: false,
  })
  userId?: string;

  @property({
    type: 'string',
    required: false,
  })
  status?: string;

  /** TODO: tabloya çek */
  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
    required: true,
  })
  priceSnapshot: number;

  @property({
    type: 'string',
    required: false,
    defaultFn: 'now',
  })
  orderDate?: string;

  @property({
    type: 'Date',
    required: false,
    defaultFn: 'now',
  })
  createdDate?: Date;

  @property({
    type: 'string',
    required: false,
  })
  createdBy?: string;

  @property({
    type: 'string',
    required: false,
  })
  createdById?: string;

  @property({
    type: 'Date',
    required: false,
  })
  updatedDate?: Date;

  @property({
    type: 'string',
    required: false,
  })
  updatedBy?: string;

  @property({
    type: 'string',
    required: false,
  })
  updatedById?: string;

  @property({
    type: 'Date',
    required: false,
    defaultFn: 'now',
  })
  deletedDate?: Date;

  @property({
    type: 'string',
    required: false,
  })
  deletedBy?: string;

  @property({
    type: 'string',
    required: false,
  })
  deletedById?: string;

  @property({
    type: 'boolean',
    required: false,
  })
  isDeleted?: boolean;



  constructor(data?: Partial<Delivery>) {
    super(data);
  }
}

export interface DeliveryRelations {
  // describe navigational properties here
}

export type DeliveryWithRelations = Delivery & DeliveryRelations;
