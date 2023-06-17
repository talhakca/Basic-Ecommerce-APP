import { createReducer, on } from "@ngrx/store";
import { ProductWithRelations } from "src/app/features/shared/sdk/models";
import * as ProductDataStoreActions from "./product-data-store.actions";

export const featureKey = 'productKey';


export interface ProductState {
    products: ProductWithRelations[];
    isLoading: boolean;
}


export const initialState: ProductState = {
    products: [],
    isLoading: false,
};

export const reducer = createReducer(
    initialState,
    on(ProductDataStoreActions.GetProducts, (state, action) => ({
        ...state,
        isLoading: true,
    })),
    on(ProductDataStoreActions.GetProductsSuccessful, (state, action) => ({
        ...state,
        products: action.payload.products,
        isLoading: false,
    })),
    on(ProductDataStoreActions.GetProductsFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
    })),
    on(ProductDataStoreActions.UpdateProduct, (state, action) => ({
        ...state,
        isLoading: true,
    })),
    on(ProductDataStoreActions.UpdateProductSuccessful, (state, action) => ({
        ...state,
        products: updateProperties(state.products, action.payload.updatedProduct, action.payload.id),
        isLoading: false
    })),
    on(ProductDataStoreActions.UpdateProductFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
    })),
    on(ProductDataStoreActions.CreateProduct, (state, action) => ({
        ...state,
        isLoading: true,
    })),
    on(ProductDataStoreActions.CreateProductSuccessful, (state, action) => ({
        ...state,
        products: [
            ...state.products,
            action.payload.product,
        ],
        isLoading: false,
    })),
    on(ProductDataStoreActions.CreateProductFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
    })),
    on(ProductDataStoreActions.DeleteProduct, (state, action) => ({
        ...state,
        isLoading: true
    })),
    on(ProductDataStoreActions.DeleteProductSuccessful, (state, action) => ({
        ...state,
        products: state.products.filter(product => product.id !== action.payload.deletedProductId),
        isLoading: false
    })),
    on(ProductDataStoreActions.DeleteProductFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
    }))

);

export function updateProperties(entities, updatedEntity, id) {
    const beforeUpdatedEntity = entities.find(entity => entity.id === id);
    return [
        ...entities.filter(entity => entity.id !== id),
        { ...beforeUpdatedEntity, ...updatedEntity }
    ]
}

