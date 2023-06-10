/* Angular */
import { createReducer, on } from '@ngrx/store';

/* Services */
import { UtilityService } from 'src/app/features/shared/services';

/* Service variables */
const utilityService = new UtilityService();

import { CartWithRelations, CategoryWithRelations, CommentWithRelations, DistributorWithRelations, OrderWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';
import * as ProductActions from './app-data-store.actions';

/* State key */
export const featureKey = 'AppDataStore';

/* State interface */
export interface AppState {
  products: ProductWithRelations[];
  categories: CategoryWithRelations[];
  distributors: DistributorWithRelations[];
  cart: CartWithRelations[];
  inactiveCarts: CartWithRelations[];
  orders: OrderWithRelations[],
  comments: CommentWithRelations[]
}

/* Initial values */
export const initialState: AppState = {
  products: [],
  categories: [],
  distributors: [],
  cart: [],
  inactiveCarts: [],
  orders: [],
  comments: []
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.GetProductsSuccessful, (state, action) => ({
    ...state,
    products: action.payload.products,
  })),
  on(ProductActions.GetCategoriesSuccessful, (state, action) => ({
    ...state,
    categories: action.payload.categories,
  })),
  on(ProductActions.GetDistributorsSuccessful, (state, action) => ({
    ...state,
    distributors: action.payload.distributors,
  })),
  on(ProductActions.GetCartSuccessful, (state, action) => ({
    ...state,
    cart: action.payload.cart.filter(cart => !cart.orderId),
  })),
  on(ProductActions.GetCartSuccessful, (state, action) => ({
    ...state,
    inactiveCarts: action.payload.cart.filter(cart => cart.orderId),
  })),
  on(ProductActions.AddToCartSuccessful, (state, action) => ({
    ...state,
    cart: [
      ...state.cart,
      action.payload.cart
    ],
  })),
  on(ProductActions.CreateOrderSuccessful, (state, action) => {
    let inactiveCarts = state.cart.filter(cartItem => (action.payload as any).orderedProducts.some(product => product.id === cartItem.id));
    inactiveCarts = inactiveCarts.map(cart => ({ ...cart, orderId: action.payload.order.id }));
    return {
      ...state,
      inactiveCarts: [
        ...state.inactiveCarts,
        ...inactiveCarts
      ],
      cart: state.cart.filter(cartItem => !((action.payload as any).orderedProducts.some(product => product.id === cartItem.id))),
      orders: [
        ...state.orders,
        action.payload.order
      ]
    };
  }),
  on(ProductActions.GetOrdersSuccessful, (state, action) => ({
    ...state,
    orders: action.payload.orders
  })),
  on(ProductActions.UpdateProductSuccessful, (state, action) => ({
    ...state,
    products: updateProperties(state.products, action.payload.updatedProduct, action.payload.id)
  })),
  on(ProductActions.CreateCommentSuccessful, (state, action) => {
    let product = state.products.find(product => product.id === action.payload.comment.productId);
    product = {
      ...product,
      comments: [
        ...(
          product.comments ?? []
        ),
        action.payload.comment
      ]
    };
    return {
      ...state,
      products: [
        ...state.products.filter(product => product.id !== action.payload.comment.productId),
        product
      ]
    }
  }),
  on(ProductActions.UpdateCommentSuccessful, (state, action) => {
    let product = state.products.find(product => product.id === action.payload.comment.productId);
    product = {
      ...product,
      comments: updateProperties((product.comments ?? []), action.payload.comment, action.payload.id)
    };
    return {
      ...state,
      products: [
        ...state.products.filter(product => product.id !== action.payload.productId),
        product
      ]
    }
  }),
  on(ProductActions.CreateCategorySuccessful, (state, action) => ({
    ...state,
    categories: [
      ...state.categories,
      action.payload.category
    ],
  })),
  on(ProductActions.DeleteCategorySuccessful, (state, action) => ({
    ...state,
    categories: state.categories.filter(category => category.id !== action.payload.deletedCategoryId)
  })),
);


export function updateProperties(entities, updatedEntity, id) {
  const beforeUpdatedEntity = entities.find(entity => entity.id === id);
  return [
    ...entities.filter(entity => entity.id !== id),
    { ...beforeUpdatedEntity, ...updatedEntity }
  ]
}
