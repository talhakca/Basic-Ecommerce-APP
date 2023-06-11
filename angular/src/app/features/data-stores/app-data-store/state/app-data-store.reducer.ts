/* Angular */
import { createReducer, on } from '@ngrx/store';

/* Services */
import { UtilityService } from 'src/app/features/shared/services';

/* Service variables */
const utilityService = new UtilityService();

import { Address, CartWithRelations, CategoryWithRelations, CommentWithRelations, DistributorWithRelations, OrderWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';
import * as ProductActions from './app-data-store.actions';
import { update } from 'lodash';

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
  adminOrders: OrderWithRelations[],
  comments: CommentWithRelations[],
  addresses: Address[];
}

/* Initial values */
export const initialState: AppState = {
  products: [],
  categories: [],
  distributors: [],
  cart: [],
  inactiveCarts: [],
  orders: [],
  comments: [],
  adminOrders: [],
  addresses: []
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
    console.log(action.payload)
    let inactiveCarts = state.cart.filter(cartItem => (action.payload as any).order.orderedProducts.some(product => product.id === cartItem.id));
    inactiveCarts = inactiveCarts.map(cart => ({ ...cart, orderId: action.payload.order.id }));
    return {
      ...state,
      inactiveCarts: [
        ...state.inactiveCarts,
        ...inactiveCarts
      ],
      cart: state.cart.filter(cartItem => !((action.payload as any).order.orderedProducts.some(product => product.id === cartItem.id))),
      orders: [
        ...state.orders,
        action.payload.order
      ],
      adminOrders: [
        ...state.orders,
        action.payload.order
      ]
    };
  }),
  on(ProductActions.GetOrdersSuccessful, (state, action) => ({
    ...state,
    orders: action.payload.orders
  })),
  on(ProductActions.GetAdminOrdersSuccessful, (state, action) => ({
    ...state,
    adminOrders: action.payload.orders
  })),
  on(ProductActions.UpdateProductSuccessful, (state, action) => ({
    ...state,
    products: updateProperties(state.products, action.payload.updatedProduct, action.payload.id)
  })),
  on(ProductActions.UpdateOrderSuccessful, (state, action) => ({
    ...state,
    orders: updateProperties(state.orders, action.payload.updatedOrder, action.payload.id),
    adminOrders: updateProperties(state.adminOrders, action.payload.updatedOrder, action.payload.id)
  })),
  on(ProductActions.GetAddressesSuccessful, (state, action) => ({
    ...state,
    addresses: action.payload.addresses,
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
  on(ProductActions.CreateProductSuccessful, (state, action) => ({
    ...state,
    products: [
      ...state.products,
      action.payload.product
    ]
  }))
  ,
  on(ProductActions.DeleteCategorySuccessful, (state, action) => ({
    ...state,
    categories: state.categories.filter(category => category.id !== action.payload.deletedCategoryId)
  })),
  on(ProductActions.DeleteProductSuccessful, (state, action) => ({
    ...state,
    products: state.products.filter(product => product.id !== action.payload.deletedProductId)
  })),
  on(ProductActions.UpdateCategorySuccessful, (state, action) => {
    const updatedCategoryId = action.payload.id;
    const updatedCategoryName = action.payload.updatedCategory.name;
    const updatedCategories = state.categories.map(category => {
      if (category.id === updatedCategoryId) {
        return {
          ...category,
          name: updatedCategoryName
        };
      }
      return category;
    });
    return {
      ...state,
      categories: updatedCategories
    };
  }),
  on(ProductActions.UpdateProductSuccessful, (state, action) => {
    const updatedProductId = action.payload.id;
    const updatedProduct = action.payload.updatedProduct;
    const updatedProducts = state.products.map(product => {
      if (product.id === updatedProductId) {
        return {
          ...product,
          ...updatedProduct
        };
      }
      return product;
    });
    return {
      ...state,
      products: updatedProducts
    }
  }),
  on(ProductActions.RefundCartsSuccessful, (state, action) => ({
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
    })
  })),
  on(ProductActions.UpdateCartSuccessful, (state, action) => {
    if (action.payload.isInactive) {
      return {
        ...state,
        inactiveCarts: updateProperties(state.inactiveCarts, action.payload.updatedCart, action.payload.id)
      }
    } else {
      return {
        ...state,
        carts: updateProperties(state.cart, action.payload.updatedCart, action.payload.id)
      }
    }
  }),
);




export function updateProperties(entities, updatedEntity, id) {
  const beforeUpdatedEntity = entities.find(entity => entity.id === id);
  return [
    ...entities.filter(entity => entity.id !== id),
    { ...beforeUpdatedEntity, ...updatedEntity }
  ]
}
