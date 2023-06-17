/* angular */
import { createAction, props } from '@ngrx/store';
import { Address, Cart, CartWithRelations, CommentWithRelations, Distributor, DistributorWithRelations, NewCategory, NewComment, NewDistributor, NewOrder, NewProduct, Order, OrderWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';

/* action types */
export enum ActionTypes {
  InitApp = '[APP] InitApp',
  AddToCart = '[APP] AddToCart',
  GetCart = '[APP] GetCart',
  GetCartSuccessful = '[APP] GetCartSuccessful',
  AddToCartSuccessful = '[APP] AddToCartSuccessful',
  CreateOrder = '[APP] CreateOrder',
  CreateOrderSuccessful = '[APP] CreateOrderSuccessful',
  GetOrdersSuccessful = '[APP] GetOrdersSuccessful',
  GetOrders = '[APP] GetOrders',
  CreateComment = '[APP] CreateComment',
  CreateCommentSuccessful = '[APP] CreateCommentSuccessful',
  UpdateComment = '[APP] UpdateComment',
  UpdateCommentSuccessful = '[APP] UpdateCommentSuccessful',
  UpdateCart = '[APP] UpdateCart',
  UpdateCartSuccessful = '[APP] UpdateCartSuccessful',
  RefundCarts = '[APP] RefundCarts',
  RefundCartsSuccessful = '[APP] RefundCartsSuccessful',
  UpdateOrder = '[APP] UpdateOrder',
  UpdateOrderSuccessful = '[APP] UpdateOrderSuccessful',
  GetAddresses = '[APP] GetAddresses',
  GetAddressesSuccessful = '[APP] GetAddressesSuccessful',
  GetAdminOrdersSuccessful = '[APP] GetAdminOrdersSuccessful',
}

/* actions */

export const InitApp = createAction(ActionTypes.InitApp);

export const UpdateComment = createAction(ActionTypes.UpdateComment, props<{ payload: { id: string, comment: Partial<CommentWithRelations>, productId: string } }>());
export const UpdateCommentSuccessful = createAction(ActionTypes.UpdateCommentSuccessful, props<{ payload: { id: string, comment: CommentWithRelations, productId: string } }>());
export const CreateComment = createAction(ActionTypes.CreateComment, props<{ payload: { comment: NewComment } }>());
export const CreateCommentSuccessful = createAction(ActionTypes.CreateCommentSuccessful, props<{ payload: { comment: CommentWithRelations } }>());
export const UpdateCart = createAction(ActionTypes.UpdateCart, props<{ payload: { id: string, updatedCart: Partial<Cart>, isInactive?: boolean } }>());
export const UpdateCartSuccessful = createAction(ActionTypes.UpdateCartSuccessful, props<{ payload: { id: string, updatedCart: Partial<Cart>, isInactive?: boolean } }>());
export const UpdateOrder = createAction(ActionTypes.UpdateOrder, props<{ payload: { id: string, updatedOrder: Partial<OrderWithRelations> } }>());
export const UpdateOrderSuccessful = createAction(ActionTypes.UpdateOrderSuccessful, props<{ payload: { id: string, updatedOrder: Partial<OrderWithRelations> } }>());
export const CreateOrder = createAction(ActionTypes.CreateOrder, props<{ payload: { order: NewOrder } }>());
export const CreateOrderSuccessful = createAction(ActionTypes.CreateOrderSuccessful, props<{ payload: { order: Order } }>());
export const GetOrdersSuccessful = createAction(ActionTypes.GetOrdersSuccessful, props<{ payload: { orders: Order[] } }>());
export const GetOrders = createAction(ActionTypes.GetOrders);
export const GetAddressesSuccessful = createAction(ActionTypes.GetAddressesSuccessful, props<{ payload: { addresses: Address[] } }>());
export const GetAddresses = createAction(ActionTypes.GetAddresses);
export const GetAdminOrdersSuccessful = createAction(ActionTypes.GetAdminOrdersSuccessful, props<{ payload: { orders: Order[] } }>());
export const AddToCart = createAction(ActionTypes.AddToCart, props<{ payload: { productId: string } }>());
export const GetCart = createAction(ActionTypes.GetCart);
export const GetCartSuccessful = createAction(ActionTypes.GetCartSuccessful, props<{ payload: { cart: CartWithRelations[], adminCart: CartWithRelations[] } }>());
export const AddToCartSuccessful = createAction(ActionTypes.AddToCartSuccessful, props<{ payload: { cart: CartWithRelations } }>());
export const RefundCarts = createAction(ActionTypes.RefundCarts, props<{ payload: { cartIds: string[] } }>());
export const RefundCartsSuccessful = createAction(ActionTypes.RefundCartsSuccessful, props<{ payload: { cartIds: string[] } }>());