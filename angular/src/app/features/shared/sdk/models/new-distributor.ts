/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Distributor, 'id'>, schemaOptions: { title: 'NewDistributor', exclude: [ 'id' ] })
 */
export interface NewDistributor {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  isDeleted?: boolean;
  name: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;

  [key: string]: any;
}
