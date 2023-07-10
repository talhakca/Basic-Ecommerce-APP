import { createReducer, on } from "@ngrx/store";
import { CartWithRelations } from "src/app/features/shared/sdk/models";
import * as CartActions from './cart-data-store.actions';
import * as OrderActions from '../../order-data-store/state/order-data-store.actions'

export const featureKey = 'cartKey';

export interface CartState {
    cart: CartWithRelations[];
    inactiveCarts: CartWithRelations[];
    adminInactiveCarts: CartWithRelations[];
    error: any,
    isLoading: boolean;
}

/* Initial values */
export const initialState: CartState = {
    cart: [],
    isLoading: false,
    inactiveCarts: [],
    adminInactiveCarts: [],
    error: ''
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
            error: 'Get cart failure!',
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
            error: 'Add to cart failure!',
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
            error: 'Update cart failure',
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
    }),
    on(OrderActions.CreateOrder, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(OrderActions.CreateOrderSuccessful, (state, action) => {
        console.log(action.payload)
        let inactiveCarts = state.cart.filter(cartItem => (action.payload as any).order.orderedProducts.some(product => product.id === cartItem.id));
        inactiveCarts = inactiveCarts.map(cart => ({ ...cart, orderId: action.payload.order.id }));
        return {
            ...state,
            inactiveCarts: [
                ...state.inactiveCarts,
                ...inactiveCarts
            ],
            adminInactiveCarts: [
                ...state.adminInactiveCarts,
                ...inactiveCarts
            ],
            cart: state.cart.filter(cartItem => !((action.payload as any).order.orderedProducts.some(product => product.id === cartItem.id))),
            isLoading: false
        }
    }),
    on(OrderActions.CreateOrderFailure, (state, action) => {
        return {
            ...state,
            error: 'Create order failure',
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

