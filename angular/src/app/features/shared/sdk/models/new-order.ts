/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<OrderCreateDTO, 'id'>, schemaOptions: { title: 'NewOrder', exclude: [ 'id' ] })
 */
export interface NewOrder {
  addressId?: string;
  orderedProducts: Array<{  }>;
  paymentId: string;
  price: number;
  status: string;
  userId?: string;
}
