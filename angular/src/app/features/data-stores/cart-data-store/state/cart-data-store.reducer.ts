import { createReducer, on } from "@ngrx/store";
import { CartWithRelations } from "src/app/features/shared/sdk/models";
import * as CartActions from './cart-data-store.actions';

export const featureKey = 'cartKey';

export interface CartState {
    cart: CartWithRelations[];
    inactiveCarts: CartWithRelations[];
    adminInactiveCarts: CartWithRelations[];
    isLoading: boolean;
}

/* Initial values */
export const initialState: CartState = {
    cart: [],
    isLoading: false,
    inactiveCarts: [],
    adminInactiveCarts: []
};

export const reducer = createReducer(
    initialState,
    on(CartActions.GetCart, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CartActions.GetCartSuccessful, (state, action) => ({
        ...state,
        cart: action.payload.cart.filter(cart => !cart.orderId),
        isLoading: false
    })),
    on(CartActions.GetCartSuccessful, (state, action) => ({
        ...state,
        inactiveCarts: action.payload.cart.filter(cart => cart.orderId),
        adminInactiveCarts: action.payload.adminCart
    })),
    on(CartActions.GetCartFailure, (state, action) => {
        return {
            ...state,
            Error,
            isLoading: false,
        }
    }),
    on(CartActions.AddToCart, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CartActions.AddToCartSuccessful, (state, action) => ({
        ...state,
        cart: [
            ...state.cart,
            action.payload.cart,
        ],
        isLoading: false
    })),
    on(CartActions.AddToCartFailure, (state, action) => {
        return {
            ...state,
            Error,
            isLoading: false,
        }
    }),
    on(CartActions.UpdateCart, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CartActions.UpdateCartSuccessful, (state, action) => {
        if (action.payload.isInactive) {
            return {
                ...state,
                inactiveCarts: updateProperties(state.inactiveCarts, action.payload.updatedCart, action.payload.id),
                adminInactiveCarts: updateProperties(state.inactiveCarts, action.payload.updatedCart, action.payload.id)
            }
        } else {
            return {
                ...state,
                carts: updateProperties(state.cart, action.payload.updatedCart, action.payload.id)
            }
        }
    }),
    on(CartActions.UpdateCartFailure, (state, action) => {
        return {
            ...state,
            Error,
            isLoading: false,
        }
    }),
    on(CartActions.RefundCarts, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CartActions.RefundCartsSuccessful, (state, action) => ({
        ...state,
        inactiveCarts: state.inactiveCarts.map(cart => {
            if (action.payload.cartIds.includes(cart.id)) {
                return {
                    ...cart,
                    refundStatus: 'PENDING'
                }
            } else {
                return cart;
            }
        }),
        adminInactiveCarts: state.adminInactiveCarts.map(cart => {
            if (action.payload.cartIds.includes(cart.id)) {
                return {
                    ...cart,
                    refundStatus: 'PENDING'
                }
            } else {
                return cart;
            }
        }),
        isLoading: false
    })),
    on(CartActions.RefundCartsFailure, (state, action) => {
        return {
            ...state,
            Error,
            isLoading: false
        }
    })

)
export function updateProperties(entities, updatedEntity, id) {
    const beforeUpdatedEntity = entities.find(entity => entity.id === id);
    return [
        ...entities.filter(entity => entity.id !== id),
        { ...beforeUpdatedEntity, ...updatedEntity }
    ]
}

