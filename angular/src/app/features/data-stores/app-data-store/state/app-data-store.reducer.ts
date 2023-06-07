/* Angular */
import { createReducer, on } from '@ngrx/store';

/* Services */
import { UtilityService } from 'src/app/features/shared/services';

/* Service variables */
const utilityService = new UtilityService();

import { CartWithRelations, CategoryWithRelations, DistributorWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';
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
  newProducts: Product[];
}

/* Initial values */
export const initialState: AppState = {
  products: [],
  categories: [],
  distributors: [],
  cart: [],
  inactiveCarts: [],
  newProducts: []
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
  on(ProductActions.PostProductSuccessful, (state, action) => ({
    ...state,
    newProducts: action.payload.newProducts
  }))
);
