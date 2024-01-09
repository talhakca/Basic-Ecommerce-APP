import { createReducer, on } from "@ngrx/store";
import { orderBy } from "lodash";
import { CategoryWithRelations } from "src/app/features/shared/sdk/models";
import * as CategoryAction from './category-data-store.actions';


export const featureKey = 'categoryKey';

export interface CategoryState {
    categories: CategoryWithRelations[];
    isLoading: boolean;
    error: any;
}

/* Initial values */
export const initialState: CategoryState = {
    categories: [],
    isLoading: false,
    error: ''
};

export const reducer = createReducer(
    initialState,
    on(CategoryAction.GetCategories, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    })
    ,
    on(CategoryAction.GetCategoriesSuccessful, (state, action) => {
        return {
            ...state,
            categories: orderBy(action.payload.categories, 'name', 'asc'),
            isLoading: false
        }
    }),
    on(CategoryAction.GetCategoriesFailure, (state, action) => {
        return {
            ...state,
            error: 'Get categories failure!',
            isLoading: false,
        }
    }),
    on(CategoryAction.CreateCategory, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CategoryAction.CreateCategorySuccessful, (state, action) => {
        return {
            ...state,
            categories: orderBy([
                ...state.categories,
                action.payload.category
            ], 'name', 'asc'),
            isLoading: false,
        }
    }),
    on(CategoryAction.CreateCategoryFailure, (state, action) => {
        return {
            ...state,
            error: 'Create category failure!',
            isLoading: false
        }
    }),
    on(CategoryAction.DeleteCategory, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CategoryAction.DeleteCategorySuccessful, (state, action) => ({
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload.deletedCategoryId),
        isLoading: false
    })),
    on(CategoryAction.DeleteCategoryFailure, (state, action) => {
        return {
            ...state,
            error: 'Delete category failure!',
            isLoading: false
        }
    }),
    on(CategoryAction.UpdateCategory, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(CategoryAction.UpdateCategorySuccessful, (state, action) => {
        return {
            ...state,
            categories: orderBy(updateProperties(state.categories, action.payload.updatedCategory, action.payload.id), 'name', 'asc'),
            isLoading: false
        };
    }),
    on(CategoryAction.UpdateCategoryFailure, (state, action) => {
        return {
            ...state,
            error: 'Update category failure!',
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
