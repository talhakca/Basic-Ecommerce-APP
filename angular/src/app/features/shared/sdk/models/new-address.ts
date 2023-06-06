/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Address, 'id'>, schemaOptions: { title: 'NewAddress', exclude: [ 'id' ] })
 */
export interface NewAddress {
  city: string;
  details?: string;
  street: string;
  street2?: null | string;
  title: string;
  userId?: string;
}
