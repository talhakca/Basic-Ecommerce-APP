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
  User,
  Cart,
} from '.';
import { Comment } from './comment.model';

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
    jsonSchema: { nullable: true }
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
  ratingCount?: number;

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

  @property({
    type: 'Date',
    required: false,
    defaultFn: 'now',
  })
  createdDate?: Date;

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

  @hasMany(() => User, {
    through: {
      model: () => Cart,
      keyFrom: 'productId',
      keyTo: 'userId',
    },
    name: 'cart',
  })
  cart: Product[];

  @hasMany(() => Comment)
  comments: Comment[];

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
