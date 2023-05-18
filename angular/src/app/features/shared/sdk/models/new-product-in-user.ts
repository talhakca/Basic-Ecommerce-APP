/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Product, 'id'>, schemaOptions: { title: 'NewProductInUser', exclude: [ 'id' ] })
 */
export interface NewProductInUser {
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
  warrantyStatus?: string;

  [key: string]: any;
}
