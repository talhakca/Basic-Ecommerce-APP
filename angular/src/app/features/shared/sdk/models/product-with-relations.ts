/* tslint:disable */
/* eslint-disable */
import { CategoryWithRelations } from './category-with-relations';
import { DistributorWithRelations } from './distributor-with-relations';

/**
 * (tsType: ProductWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductWithRelations {
  category?: CategoryWithRelations;
  categoryId?: string;
  description?: string;
  discountRate?: number;
  distributor?: DistributorWithRelations;
  distributorId?: string;
  id: string;
  imageUrl: string;
  isDeleted?: boolean;
  model: string;
  name: string;
  number?: string;
  price?: number;
  quantityInStocks: number;
  rating?: number;
  warrantyStatus?: string;

  [key: string]: any;
}
