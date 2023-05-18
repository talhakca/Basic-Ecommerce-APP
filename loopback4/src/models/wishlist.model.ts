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
  User,
Product,
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
export class Wishlist extends Entity {

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

    

  constructor(data?: Partial<Wishlist>) {
    super(data);
  }
}

export interface WishlistRelations {
  // describe navigational properties here
}

export type WishlistWithRelations = Wishlist & WishlistRelations;
