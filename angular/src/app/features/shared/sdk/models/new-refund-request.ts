/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<RefundRequest, 'id'>, schemaOptions: { title: 'NewRefundRequest', exclude: [ 'id' ] })
 */
export interface NewRefundRequest {
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
