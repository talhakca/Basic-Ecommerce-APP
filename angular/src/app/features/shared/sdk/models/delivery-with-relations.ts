/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: DeliveryWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DeliveryWithRelations {
  address: string;
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  id: string;
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
