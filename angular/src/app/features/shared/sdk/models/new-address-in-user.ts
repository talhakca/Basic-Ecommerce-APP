/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Address, 'id'>, 'userId'>, schemaOptions: { title: 'NewAddressInUser', exclude: [ 'id' ], optional: [ 'userId' ] })
 */
export interface NewAddressInUser {
  city: string;
  details?: string;
  street: string;
  street2?: null | string;
  title: string;
  userId?: string;
}
