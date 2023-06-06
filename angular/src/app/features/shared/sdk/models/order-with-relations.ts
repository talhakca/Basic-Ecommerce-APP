/* tslint:disable */
/* eslint-disable */
import { AddressWithRelations } from './address-with-relations';
import { CartWithRelations } from './cart-with-relations';
import { UserWithRelations } from './user-with-relations';

/**
 * (tsType: OrderWithRelations, schemaOptions: { includeRelations: true })
 */
export interface OrderWithRelations {
  address?: AddressWithRelations;
  addressId?: string;
  id: string;
  orderedProducts?: Array<CartWithRelations>;
  paymentId: string;
  price: number;
  status: string;
  user?: UserWithRelations;
  userId?: string;
}
