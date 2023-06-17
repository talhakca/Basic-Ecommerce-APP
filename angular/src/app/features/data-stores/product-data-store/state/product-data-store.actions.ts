import { createAction, props } from '@ngrx/store';
import { ProductWithRelations, Product, NewProduct } from 'src/app/features/shared/sdk/models';

export enum ActionTypes {


    InitApp = '[PRODUCTDATASTORE] InitApp',
    GetProducts = '[PRODUCTDATASTORE] GetProducts',
    GetProductsSuccessful = '[PRODUCTDATASTORE] GetProductsSuccessful',
    GetProductsFailure = '[PRODUCTDATASTORE] GetProductsFailure',
    UpdateProductRate = '[PRODUCTDATASTORE] UpdateProductRate',
    UpdateProductRateSuccessful = '[PRODUCTDATASTORE] UpdateProductRateSuccessful',
    UpdateProduct = '[PRODUCTDATASTORE] UpdateProduct',
    UpdateProductFailure = '[PRODUCTDATASTORE] UpdateProductFailure',
    UpdateProductSuccessful = '[PRODUCTDATASTORE] UpdateProductSuccessful',
    CreateProduct = '[PRODUCTDATASTORE] CreateProduct',
    CreateProductSuccessful = '[PRODUCTDATASTORE] CreateProductSuccessful',
    CreateProductFailure = '[PRODUCTDATASTORE] CreateProductFailure',
    DeleteProduct = '[PRODUCTDATASTORE] DeleteProduct',
    DeleteProductSuccessful = '[PRODUCTDATASTORE] DeleteProductSuccessful',
    DeleteProductFailure = '[PRODUCTDATASTORE] DeleteProductFailure'
}

export const InitApp = createAction(ActionTypes.InitApp);
export const GetProducts = createAction(ActionTypes.GetProducts)
export const GetProductsSuccessful = createAction(ActionTypes.GetProductsSuccessful, props<{ payload: { products: ProductWithRelations[] } }>());
export const GetProductsFailure = createAction(ActionTypes.GetProductsFailure, props<{ error: any }>())
export const UpdateProductRate = createAction(ActionTypes.UpdateProductRate, props<{ payload: { productId: string, rating: number } }>());
export const UpdateProductRateSuccessful = createAction(ActionTypes.UpdateProductRateSuccessful);
export const UpdateProduct = createAction(ActionTypes.UpdateProduct, props<{ payload: { id: string, updatedProduct: Partial<ProductWithRelations> } }>());
export const UpdateProductSuccessful = createAction(ActionTypes.UpdateProductSuccessful, props<{ payload: { id: string, updatedProduct: Partial<Product> } }>());
export const UpdateProductFailure = createAction(ActionTypes.UpdateProductFailure, props<{ error: any }>())
export const CreateProduct = createAction(ActionTypes.CreateProduct, props<{ payload: { product: NewProduct } }>());
export const CreateProductSuccessful = createAction(ActionTypes.CreateProductSuccessful, props<{ payload: { product: Product } }>());
export const CreateProductFailure = createAction(ActionTypes.CreateProductFailure, props<{ error: any }>())
export const DeleteProduct = createAction(ActionTypes.DeleteProduct, props<{ payload: { deletedProductId } }>());
export const DeleteProductSuccessful = createAction(ActionTypes.DeleteProductSuccessful, props<{ payload: { deletedProductId: string } }>());
export const DeleteProductFailure = createAction(ActionTypes.DeleteProductFailure, props<{ error: any }>());