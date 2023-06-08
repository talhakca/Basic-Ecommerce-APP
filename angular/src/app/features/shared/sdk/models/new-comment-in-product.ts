/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Comment, 'id'>, 'productId'>, schemaOptions: { title: 'NewCommentInProduct', exclude: [ 'id' ], optional: [ 'productId' ] })
 */
export interface NewCommentInProduct {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  isDeleted?: boolean;
  message: string;
  productId?: string;
  rate: number;
  status: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;

  [key: string]: any;
}
