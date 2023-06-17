import { createReducer, on } from "@ngrx/store";
import { CategoryWithRelations } from "src/app/features/shared/sdk/models";
import * as CategoryAction from './category-data-store.actions';


export const featureKey = 'categoryKey';

export interface CategoryState {
    categories: CategoryWithRelations[];
    isLoading: boolean;
}

/* Initial values */
export const initialState: CategoryState = {
    categories: [],
    isLoading: false
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
            categories: action.payload.categories,
            isLoading: false
        }
    }),
    on(CategoryAction.GetCategoriesFailure, (state, action) => {
        return {
            ...state,
            Error,
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
            categories: [
                ...state.categories,
                action.payload.category
            ],
            isLoading: false
        }
    }),
    on(CategoryAction.CreateCategoryFailure, (state, action) => {
        return {
            ...state,
            Error,
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
            Error,
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
            categories: updatedCategories,
            isLoading: false
        };
    }),
    on(CategoryAction.UpdateCategoryFailure, (state, action) => {
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
