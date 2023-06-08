/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Comment, 'id'>, schemaOptions: { title: 'NewComment', exclude: [ 'id' ] })
 */
export interface NewComment {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  isDeleted?: boolean;
  message: string;
  productId?: string;
  rate?: number;
  status: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;
  userId?: string;

  [key: string]: any;
}
