/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Partial<Comment>, schemaOptions: { partial: true })
 */
export interface CommentPartial {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  id?: string;
  isDeleted?: boolean;
  message?: string;
  productId?: string;
  rate?: number;
  status?: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;
  userId?: string;

  [key: string]: any;
}
