/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Product, 'id'>, schemaOptions: { title: 'NewProduct', exclude: [ 'id' ] })
 */
export interface NewProduct {
  categoryId?: string;
  description?: string;
  discountRate?: number;
  distributorId?: string;
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
