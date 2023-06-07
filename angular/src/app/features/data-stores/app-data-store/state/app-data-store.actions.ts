/* angular */
import { createAction, props } from '@ngrx/store';
import { create } from 'lodash';
import { CartWithRelations, Category, Distributor, DistributorWithRelations, NewCategory, Order, OrderWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';

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
  AddProduct = '[APP] AddProduct',
  AddProductSuccessful = '[APP] AddProductSuccessful',
  AddCategory = '[APP] AddCategory',
  AddCategorySuccessful = '[APP] AddCategorySuccessful',
  DeleteCategory = '[APP] DeleteCategory',
  DeleteCategorySuccessful = '[APP] DeleteCategorySuccessful',
  UpdateCategory = '[APP] UpdateCategory',
  UpdateCategorySuccessful = '[APP] UpdateCategorySuccessful'

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
export const AddProduct = createAction(
  ActionTypes.AddProduct,
  props<{ payload: Product }>()
);
export const AddProductSuccessful = createAction(ActionTypes.AddProductSuccessful, props<{ payload: { newProducts: Product[] } }>())
export const AddCategory = createAction(ActionTypes.AddCategory, props<{ payload: NewCategory }>());
export const AddCategorySuccessful = createAction(ActionTypes.AddCategorySuccessful, props<{ payload: { newCategories: NewCategory[] } }>());
export const DeleteCategory = createAction(ActionTypes.DeleteCategory, props<{ payload: string }>())
export const DeleteCategorySuccessful = createAction(ActionTypes.DeleteCategorySuccessful, props<{ payload: string }>())
export const UpdateCategory = createAction(ActionTypes.UpdateCategory, props<{ payload: { id: string, updatedData: NewCategory } }>());
export const UpdateCategorySuccessful = createAction(ActionTypes.UpdateCategorySuccessful, props<{ payload: Category }>());