/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Partial<Product>, schemaOptions: { partial: true })
 */
export interface ProductPartial {
  categoryId?: string;
  description?: string;
  discountRate?: number;
  distributorId?: string;
  id?: string;
  imageUrl?: string;
  isDeleted?: boolean;
  model?: string;
  name?: string;
  number?: string;
  price?: number;
  quantityInStocks?: number;
  rating?: number;
  warrantyStatus?: string;

  [key: string]: any;
}
