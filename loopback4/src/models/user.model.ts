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
  Product,
  Tax,
  Wishlist,
} from '.';
import { Cart } from './cart.model';
import {Address} from './address.model';
import {Role} from './role.model';

@model({
  settings: {
    strict: true,
    hiddenProperties: [
      'password',
    ],
    forceId: false,
    validateUpsert: true,
    idInjection: true
  }
})
export class User extends Entity {

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
    index: {
      unique: true, // info: not supported for mongodb
    },
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: false,
  })
  middleName?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: false,
    index: {
      unique: true, // info: not supported for mongodb
    },
  })
  email?: string;

  @property({
    type: 'string',
    required: false,
    index: {
      unique: true, // info: not supported for mongodb
    },
  })
  phoneNumber?: string;

  @property({
    type: 'string',
    required: false,
  })
  avatar?: string;

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

  @hasMany(() => Product, {
    through: {
      model: () => Wishlist,
      keyTo: 'productId',
      keyFrom: 'userId'
    },
    name: 'wishlist'
  })
  wishlist: Product[];

  @belongsTo(() => Tax, {
    keyFrom: 'taxId',
    keyTo: 'id',
    name: 'tax'
  })
  taxId: string;

  @hasMany(() => Product, {
    through: {
      model: () => Cart,
      keyFrom: 'userId',
      keyTo: 'productId',
    },
    name: 'cart',
  })
  cart: Product[];

  @hasMany(() => Address)
  addresses: Address[];

  @hasMany(() => Role)
  roles: Role[];

  @belongsTo(() => Role)
  roleId: string;
  [prop: string]: any;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
