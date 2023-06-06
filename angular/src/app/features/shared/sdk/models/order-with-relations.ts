/* tslint:disable */
/* eslint-disable */
import { CartWithRelations } from './cart-with-relations';
import { UserWithRelations } from './user-with-relations';

/**
 * (tsType: OrderWithRelations, schemaOptions: { includeRelations: true })
 */
export interface OrderWithRelations {
  address: {  };
  addressId?: string;
  id: string;
  orderedProducts?: Array<CartWithRelations>;
  price: number;
  status: string;
  user?: UserWithRelations;
  userId?: string;
}
