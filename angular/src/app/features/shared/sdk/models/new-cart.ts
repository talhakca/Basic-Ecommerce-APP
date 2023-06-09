/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Cart, 'id'>, schemaOptions: { title: 'NewCart', exclude: [ 'id' ] })
 */
export interface NewCart {
  orderId?: string;
  price?: number;
  productId?: string;
  userId?: string;
}
