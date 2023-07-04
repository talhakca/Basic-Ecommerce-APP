import { createReducer, on } from '@ngrx/store';
import { OrderWithRelations } from 'src/app/features/shared/sdk/models';
import * as OrderActions from './order-data-store.actions';

export const featureKey = 'orderKey';


export interface OrderState {
    orders: OrderWithRelations[];
    adminOrders: OrderWithRelations[];
    isLoading: boolean
}

export const initialState: OrderState = {
    orders: [],
    adminOrders: [],
    isLoading: false
}


export const reducer = createReducer(
    initialState,
    on(OrderActions.CreateOrder, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(OrderActions.CreateOrderSuccessful, (state, action) => {
        return {
            ...state,
            orders: [
                ...state.orders,
                action.payload.order
            ],
            adminOrders: [
                ...state.orders,
                action.payload.order
            ],
            isLoading: false
        };
    }),
    on(OrderActions.CreateOrderFailure, (state, action) => {
        return {
            ...state,
            Error,
            isLoading: false
        }
    }),
    on(OrderActions.GetOrders, (state, action) => ({
        ...state,
        isLoading: true
    })),
    on(OrderActions.GetOrdersSuccessful, (state, action) => ({
        ...state,
        orders: action.payload.orders,
        isLoading: false
    })),
    on(OrderActions.GetOrdersFailure, (state, action) => ({
        ...state,
        Error,
        isLoading: false
    })),
    on(OrderActions.GetAdminOrders, (state, action) => ({
        ...state,
        isLoading: true
    })),
    on(OrderActions.GetAdminOrdersSuccessful, (state, action) => ({
        ...state,
        adminOrders: action.payload.orders
    })),
    on(OrderActions.GetAdminOrdersFailure, (state, action) => ({
        ...state,
        Error,
        isLoading: false
    })),
    on(OrderActions.UpdateOrder, (state, action) => ({
        ...state,
        isLoading: true
    })),
    on(OrderActions.UpdateOrderSuccessful, (state, action) => ({
        ...state,
        orders: updateProperties(state.orders, action.payload.updatedOrder, action.payload.id),
        adminOrders: updateProperties(state.adminOrders, action.payload.updatedOrder, action.payload.id),
        isLoading: false
    })),
    on(OrderActions.UpdateOrderFailure, (state, action) => ({
        ...state,
        Error,
        isLoading: false
    }))
)


export function updateProperties(entities, updatedEntity, id) {
    const beforeUpdatedEntity = entities.find(entity => entity.id === id);
    return [
        ...entities.filter(entity => entity.id !== id),
        { ...beforeUpdatedEntity, ...updatedEntity }
    ]
}