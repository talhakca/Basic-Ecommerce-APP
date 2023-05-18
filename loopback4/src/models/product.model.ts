import {
  Entity,
  belongsTo,
  hasMany,
  hasOne,
  referencesMany,
  model,
  property
} from '@loopback/repository';

/* model imports */
import {
  Distributor,
  Category,
  ProductCategory,
} from '.';


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
export class Product extends Entity {

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
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

  @property({
    type: 'string',
    required: false,
  })
  number?: string;

  @property({
    type: 'string',
    required: false,
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  imageUrl?: string;

  @property({
    type: 'number',
    required: true,
  })
  quantityInStocks: number;

  @property({
    type: 'number',
    required: false,
  })
  price?: number;

  @property({
    type: 'string',
    required: false,
  })
  warrantyStatus?: string;

  @property({
    type: 'number',
    required: false,
  })
  rating?: number;

  @property({
    type: 'number',
    required: false,
  })
  discountRate?: number;

  @property({
    type: 'boolean',
    required: false,
  })
  isDeleted?: boolean;

  @belongsTo(() => Distributor, {
    keyFrom: 'distributorId',
    keyTo: 'id',
    name: 'distributor'
  })
  distributorId: string;

  @belongsTo(() => Category, {
    keyFrom: 'categoryId',
    keyTo: 'id',
    name: 'category'
  })
  categoryId: string;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
