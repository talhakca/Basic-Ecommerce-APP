/* tslint:disable */
/* eslint-disable */
export interface Product {
  categoryId?: string;
  description?: string;
  discountRate?: number;
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
