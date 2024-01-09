import { createAction, props } from "@ngrx/store";
import { Cart, CartWithRelations } from "src/app/features/shared/sdk/models";

export enum ActionTypes {
    AddToCart = '[CARTDATASTORE] AddToCart',
    AddToCartSuccessful = '[CARTDATASTORE] AddToCartSuccessful',
    AddToCartFailure = '[CARTDATASTORE] AddtoCartFailure',
    GetCart = '[CARTDATASTORE] GetCart',
    GetCartSuccessful = '[CARTDATASTORE] GetCartSuccessful',
    GetCartFailure = '[CARTDATASTORE] GetCartFailure',
    UpdateCart = '[CARTDATASTORE] UpdateCart',
    UpdateCartSuccessful = '[CARTDATASTORE] UpdateCartSuccessful',
    UpdateCartFailure = '[CARTDATASTORE] UpdateCartFailure',
    RefundCarts = '[CARTDATASTORE] RefundCarts',
    RefundCartsSuccessful = '[CARTDATASTORE] RefundCartsSuccessful',
    RefundCartsFailure = '[CARTDATASTORE] RefundCartsFailure'
}
export const AddToCart = createAction(ActionTypes.AddToCart, props<{ payload: { productId: string } }>());
export const AddToCartSuccessful = createAction(ActionTypes.AddToCartSuccessful, props<{ payload: { cart: CartWithRelations } }>());
export const AddToCartFailure = createAction(ActionTypes.AddToCartFailure, props<{ error: any }>());
export const UpdateCart = createAction(ActionTypes.UpdateCart, props<{ payload: { id: string, updatedCart: Partial<Cart>, isInactive?: boolean } }>());
export const UpdateCartSuccessful = createAction(ActionTypes.UpdateCartSuccessful, props<{ payload: { id: string, updatedCart: Partial<Cart>, isInactive?: boolean } }>());
export const UpdateCartFailure = createAction(ActionTypes.UpdateCartFailure, props<{ error: any }>());
export const GetCart = createAction(ActionTypes.GetCart);
export const GetCartSuccessful = createAction(ActionTypes.GetCartSuccessful, props<{ payload: { cart: CartWithRelations[], adminCart: CartWithRelations[] } }>());
export const GetCartFailure = createAction(ActionTypes.GetCartFailure, props<{ error: any }>());
export const RefundCarts = createAction(ActionTypes.RefundCarts, props<{ payload: { cartIds: string[] } }>());
export const RefundCartsSuccessful = createAction(ActionTypes.RefundCartsSuccessful, props<{ payload: { cartIds: string[] } }>());
export const RefundCartsFailure = createAction(ActionTypes.RefundCartsFailure, props<{ error: any }>());
