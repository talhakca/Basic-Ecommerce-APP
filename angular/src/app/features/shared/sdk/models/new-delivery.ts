/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Delivery, 'id'>, schemaOptions: { title: 'NewDelivery', exclude: [ 'id' ] })
 */
export interface NewDelivery {
  address: string;
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  isDeleted?: boolean;
  orderDate?: string;
  priceSnapshot: number;
  productId?: string;
  status?: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;
  userId?: string;

  [key: string]: any;
}
