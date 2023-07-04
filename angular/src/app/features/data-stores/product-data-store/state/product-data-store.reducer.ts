import { createReducer, on } from "@ngrx/store";
import { ProductWithRelations } from "src/app/features/shared/sdk/models";
import * as ProductDataStoreActions from "./product-data-store.actions";
import * as CommentActions from '../../comment-data-store/state/comment-data-store.actions';

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
    on(ProductDataStoreActions.UpdateProductSuccessful, (state, action) => {
        const updatedProductId = action.payload.id;
        const updatedProductName = action.payload.updatedProduct.name;
        const updatedProducts = state.products.map(product => {
            if (product.id === updatedProductId) {
                return {
                    ...product,
                    name: updatedProductName
                };
            }
            return product;
        });
        return {
            ...state,
            categories: updatedProducts,
            isLoading: false
        };
    }),
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
    })),
    on(CommentActions.CreateComment, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CommentActions.CreateCommentSuccessful, (state, action) => {
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
            ],
            isLoading: false
        }
    }),
    on(CommentActions.CreateCommentFailure, (state, action) => {
        return {
            ...state,
            Error,
            isLoading: false
        }
    }),
    on(CommentActions.UpdateComment, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CommentActions.UpdateCommentSuccessful, (state, action) => {
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
    on(CommentActions.UpdateCommentFailure, (state, action) => {
        return {
            ...state,
            Error,
            isLoading: false
        }
    })

);

export function updateProperties(entities, updatedEntity, id) {
    const beforeUpdatedEntity = entities.find(entity => entity.id === id);
    return [
        ...entities.filter(entity => entity.id !== id),
        { ...beforeUpdatedEntity, ...updatedEntity }
    ]
}

