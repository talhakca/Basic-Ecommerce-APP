/* tslint:disable */
/* eslint-disable */
import { ProductWithRelations } from './product-with-relations';
import { TaxWithRelations } from './tax-with-relations';

/**
 * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
 */
export interface UserWithRelations {
  avatar?: string;
  cart?: Array<ProductWithRelations>;
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  deletedBy?: string;
  deletedById?: string;
  deletedDate?: string;
  email?: string;
  firstName: string;
  id: string;
  isDeleted?: boolean;
  lastName: string;
  middleName?: string;
  password: string;
  phoneNumber?: string;
  tax?: TaxWithRelations;
  taxId?: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;
  username: string;
  wishlist?: Array<ProductWithRelations>;
}
