import { createAction, props } from "@ngrx/store";
import { NewCategory, Category } from "src/app/features/shared/sdk/models";

export enum ActionTypes {
    InitApp = '[CATEGORYDATASTORE] InitApp',
    GetCategoriesSuccessful = '[CATEGORYDATASTORE] GetCategoriesSuccessful',
    GetCategoriesFailure = '[CATEGORYDATASTORE] GetCategoriesFailure',
    GetCategories = '[CATEGORYDATASTORE] GetCategories',
    CreateCategory = '[CATEGORYDATASTORE] CreateCategory',
    CreateCategorySuccessful = '[CATEGORYDATASTORE] CreateCategorySuccessful',
    CreateCategoryFailure = '[CATEGORYDATASTORE] CreateCategoryFailure',
    DeleteCategory = '[CATEGORYDATASTORE] DeleteCategory',
    DeleteCategorySuccessful = '[CATEGORYDATASTORE] DeleteCategorySuccessful',
    DeleteCategoryFailure = '[CATEGORYDATASTORE] DeleteCategoryFailure',
    UpdateCategory = '[CATEGORYDATASTORE] UpdateCategory',
    UpdateCategorySuccessful = '[CATEGORYDATASTORE] UpdateCategorySuccessful',
    UpdateCategoryFailure = '[CATEGORYDATASTORE] UpdateCategoryFailure'
}

export const InitApp = createAction(ActionTypes.InitApp);
export const GetCategories = createAction(ActionTypes.GetCategories)
export const GetCategoriesSuccessful = createAction(ActionTypes.GetCategoriesSuccessful, props<{ payload: { categories: Category[] } }>());
export const GetCategoriesFailure = createAction(ActionTypes.GetCategoriesFailure, props<{ error: any }>())
export const CreateCategory = createAction(ActionTypes.CreateCategory, props<{ payload: { category: NewCategory } }>());
export const CreateCategorySuccessful = createAction(ActionTypes.CreateCategorySuccessful, props<{ payload: { category: Category } }>());
export const CreateCategoryFailure = createAction(ActionTypes.CreateCategoryFailure, props<{ error: any }>())
export const DeleteCategory = createAction(ActionTypes.DeleteCategory, props<{ payload: { deletedCategoryId } }>());
export const DeleteCategorySuccessful = createAction(ActionTypes.DeleteCategorySuccessful, props<{ payload: { deletedCategoryId: string } }>());
export const DeleteCategoryFailure = createAction(ActionTypes.DeleteCategoryFailure, props<{ error: any }>())
export const UpdateCategory = createAction(ActionTypes.UpdateCategory, props<{ payload: { id: string, updatedCategory: Partial<Category> } }>());
export const UpdateCategorySuccessful = createAction(ActionTypes.UpdateCategorySuccessful, props<{ payload: { id: string, updatedCategory: Partial<Category> } }>());
export const UpdateCategoryFailure = createAction(ActionTypes.UpdateCategoryFailure, props<{ error: any }>())