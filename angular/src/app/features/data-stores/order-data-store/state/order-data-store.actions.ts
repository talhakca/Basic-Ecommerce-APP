import { createAction, props } from '@ngrx/store';
import { NewOrder, Order, OrderWithRelations } from 'src/app/features/shared/sdk/models';

export enum ActionTypes {

    CreateOrder = '[ORDERDATASTORE] CreateOrder',
    CreateOrderSuccessful = '[ORDERDATASTORE] CreateOrderSuccessful',
    CreateOrderFailure = '[ORDERDATASTORE] CreateOrderFailure',
    GetOrdersSuccessful = '[ORDERDATASTORE] GetOrdersSuccessful',
    GetOrders = '[ORDERDATASTORE] GetOrders',
    GetOrdersFailure = '[ORDERDATASTORE] GetOrdersFailure',
    UpdateOrder = '[ORDERDATASTORE] UpdateOrder',
    UpdateOrderSuccessful = '[ORDERDATASTORE] UpdateOrderSuccessful',
    UpdateOrderFailure = '[ORDERDATASTORE] UpdateOrderFailure',
    GetAdminOrders = '[ORDERDATASTORE] GetAdminOrders',
    GetAdminOrdersSuccessful = '[ORDERDATASTORE] GetAdminOrdersSuccessful',
    GetAdminOrdersFailure = '[ORDERDATASTORE] GetAdminOrdersFailure'
}



export const UpdateOrder = createAction(ActionTypes.UpdateOrder, props<{ payload: { id: string, updatedOrder: Partial<OrderWithRelations> } }>());
export const UpdateOrderSuccessful = createAction(ActionTypes.UpdateOrderSuccessful, props<{ payload: { id: string, updatedOrder: Partial<OrderWithRelations> } }>());
export const UpdateOrderFailure = createAction(ActionTypes.UpdateOrderFailure, props<{ error: any }>());
export const CreateOrder = createAction(ActionTypes.CreateOrder, props<{ payload: { order: NewOrder } }>());
export const CreateOrderSuccessful = createAction(ActionTypes.CreateOrderSuccessful, props<{ payload: { order: Order } }>());
export const CreateOrderFailure = createAction(ActionTypes.CreateOrderFailure, props<{ error: any }>())
export const GetOrdersSuccessful = createAction(ActionTypes.GetOrdersSuccessful, props<{ payload: { orders: Order[] } }>());
export const GetOrders = createAction(ActionTypes.GetOrders);
export const GetOrdersFailure = createAction(ActionTypes.GetOrdersFailure, props<{ error: any }>());
export const GetAdminOrders = createAction(ActionTypes.GetAdminOrders);
export const GetAdminOrdersSuccessful = createAction(ActionTypes.GetAdminOrdersSuccessful, props<{ payload: { orders: Order[] } }>());
export const GetAdminOrdersFailure = createAction(ActionTypes.GetAdminOrdersFailure, props<{ error: any }>());
