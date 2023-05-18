/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<ProductCategory, 'id'>, schemaOptions: { title: 'NewProductCategory', exclude: [ 'id' ] })
 */
export interface NewProductCategory {
  categoryId?: string;
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  isDeleted?: boolean;
  productId?: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;

  [key: string]: any;
}
