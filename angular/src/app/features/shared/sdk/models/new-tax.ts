/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Tax, 'id'>, schemaOptions: { title: 'NewTax', exclude: [ 'id' ] })
 */
export interface NewTax {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  isDeleted?: boolean;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;

  [key: string]: any;
}
