/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Wishlist, 'id'>, schemaOptions: { title: 'NewWishlist', exclude: [ 'id' ] })
 */
export interface NewWishlist {
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
  userId?: string;

  [key: string]: any;
}
