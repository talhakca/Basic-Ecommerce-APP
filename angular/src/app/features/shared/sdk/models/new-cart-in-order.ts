/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Cart, 'id'>, 'orderId'>, schemaOptions: { title: 'NewCartInOrder', exclude: [ 'id' ], optional: [ 'orderId' ] })
 */
export interface NewCartInOrder {
  orderId?: string;
  productId?: string;
  userId?: string;
}