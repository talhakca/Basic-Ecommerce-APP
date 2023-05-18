/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Role, 'id'>, schemaOptions: { title: 'NewRole', exclude: [ 'id' ] })
 */
export interface NewRole {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  isDeleted?: boolean;
  key: string;
  title: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;

  [key: string]: any;
}
