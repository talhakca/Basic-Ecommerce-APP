/* tslint:disable */
/* eslint-disable */
import { CategoryWithRelations } from './category-with-relations';
import { CommentWithRelations } from './comment-with-relations';
import { DistributorWithRelations } from './distributor-with-relations';
import { UserWithRelations } from './user-with-relations';

/**
 * (tsType: ProductWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductWithRelations {
  cart?: Array<UserWithRelations>;
  category?: CategoryWithRelations;
  categoryId?: string;
  comments?: Array<CommentWithRelations>;
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
  ratingCount?: number;
  warrantyStatus?: string;

  [key: string]: any;
}
