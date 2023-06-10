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
export class Role extends Entity {

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
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  key: string;

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

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
