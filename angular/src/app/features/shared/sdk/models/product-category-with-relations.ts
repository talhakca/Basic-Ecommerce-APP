/* tslint:disable */
/* eslint-disable */
import { CategoryWithRelations } from './category-with-relations';
import { ProductWithRelations } from './product-with-relations';

/**
 * (tsType: ProductCategoryWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductCategoryWithRelations {
  category?: CategoryWithRelations;
  categoryId?: string;
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

  [key: string]: any;
}
