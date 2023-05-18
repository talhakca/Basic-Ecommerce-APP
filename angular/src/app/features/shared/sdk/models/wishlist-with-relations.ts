/* tslint:disable */
/* eslint-disable */
import { ProductWithRelations } from './product-with-relations';
import { UserWithRelations } from './user-with-relations';

/**
 * (tsType: WishlistWithRelations, schemaOptions: { includeRelations: true })
 */
export interface WishlistWithRelations {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  id: string;
  isDeleted?: boolean;
  product?: ProductWithRelations;
  productId?: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;
  user?: UserWithRelations;
  userId?: string;

  [key: string]: any;
}
