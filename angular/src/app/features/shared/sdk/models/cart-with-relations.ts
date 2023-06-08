/* tslint:disable */
/* eslint-disable */
import { ProductWithRelations } from './product-with-relations';
import { UserWithRelations } from './user-with-relations';

/**
 * (tsType: CartWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CartWithRelations {
  id: string;
  orderId?: string;
  price: number;
  product?: ProductWithRelations;
  productId?: string;
  user?: UserWithRelations;
  userId?: string;
}
