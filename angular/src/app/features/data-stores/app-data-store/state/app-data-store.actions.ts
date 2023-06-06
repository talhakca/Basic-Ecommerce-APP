/* angular */
import { createAction, props } from '@ngrx/store';
import { CartWithRelations, Category, Distributor, DistributorWithRelations, Order, OrderWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';

/* action types */
export enum ActionTypes {
  InitApp = '[APP] InitApp',
  GetProducts = '[APP] GetProducts',
  GetProductsSuccessful = '[APP] GetProductsSuccessful',
  GetCategoriesSuccessful = '[APP] GetCategoriesSuccessful',
  GetDistributorsSuccessful = '[APP] GetDistributorsSuccessful',
  AddToCart = '[APP] AddToCart',
  GetCart = '[APP] GetCart',
  GetCartSuccessful = '[APP] GetCartSuccessful',
  AddToCartSuccessful = '[APP] AddToCartSuccessful',
  CreateOrder = '[APP] CreateOrder',
  CreateOrderSuccessful = '[APP] CreateOrderSuccessful',
}

/* actions */

export const InitApp = createAction(ActionTypes.InitApp);

export const GetProducts = createAction(ActionTypes.GetProducts)

export const GetProductsSuccessful = createAction(ActionTypes.GetProductsSuccessful, props<{ payload: { products: ProductWithRelations[] } }>());
export const CreateOrder = createAction(ActionTypes.CreateOrder, props<{ payload: { order: Partial<OrderWithRelations> } }>());
export const CreateOrderSuccessful = createAction(ActionTypes.CreateOrderSuccessful, props<{ payload: { order: Order } }>());
export const GetCategoriesSuccessful = createAction(ActionTypes.GetCategoriesSuccessful, props<{ payload: { categories: Category[] } }>());
export const GetDistributorsSuccessful = createAction(ActionTypes.GetDistributorsSuccessful, props<{ payload: { distributors: DistributorWithRelations[] } }>());
export const AddToCart = createAction(ActionTypes.AddToCart, props<{ payload: { productId: string } }>());
export const GetCart = createAction(ActionTypes.GetCart);
export const GetCartSuccessful = createAction(ActionTypes.GetCartSuccessful, props<{ payload: { cart: CartWithRelations[] } }>());
export const AddToCartSuccessful = createAction(ActionTypes.AddToCartSuccessful, props<{ payload: { cart: CartWithRelations } }>());
