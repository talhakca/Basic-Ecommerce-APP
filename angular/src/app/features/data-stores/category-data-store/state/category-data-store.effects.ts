import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Category, CategoryWithRelations } from "src/app/features/shared/sdk/models";
import { CategoryControllerService } from "src/app/features/shared/sdk/services";
import { NotificationService } from "src/app/features/shared/services";
import { CreateCategory, CreateCategorySuccessful, DeleteCategory, DeleteCategorySuccessful, GetCategories, GetCategoriesSuccessful, InitApp, UpdateCategory, UpdateCategorySuccessful } from "./category-data-store.actions";
import * as CategoryDataStoreActions from "./category-data-store.actions";

@Injectable()
export class CategoryDataStoreEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private notificationService: NotificationService,
        private categoryApi: CategoryControllerService,
        private router: Router,
    ) { }

    getCategory$ = createEffect(
        () => this.actions$.pipe(
            ofType(GetCategories),
            mergeMap((action) => this.categoryApi.find().pipe(
                map((categories: CategoryWithRelations[]) => GetCategoriesSuccessful({ payload: { categories } })),
                catchError((error) => {
                    return [
                        { type: CategoryDataStoreActions.ActionTypes.GetCategoriesFailure },
                    ];
                })
            ))
        )
    )
    addCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CreateCategory),
            mergeMap((action) =>
                this.categoryApi.create({ body: { ...action.payload.category } }).pipe(
                    map((category: Category) => {
                        this.notificationService.createNotification('success', 'Category Successful Added.', '');
                        return CreateCategorySuccessful({ payload: { category } })
                    }),
                    catchError((error) => {
                        return [
                            { type: CategoryDataStoreActions.ActionTypes.CreateCategoryFailure },
                        ];
                    })
                )
            )
        )
    );
    deleteCategory$ = createEffect(
        () => this.actions$.pipe(
            ofType(DeleteCategory),
            mergeMap((action) => this.categoryApi.deleteById({ id: action.payload.deletedCategoryId }).pipe(
                map(() => {
                    this.notificationService.createNotification('success', 'Category Successful Deleted.', '');
                    return DeleteCategorySuccessful({ payload: { deletedCategoryId: action.payload.deletedCategoryId } })
                }),
                catchError((error) => {
                    return [
                        { type: CategoryDataStoreActions.ActionTypes.DeleteCategoryFailure },
                    ];
                })
            ))
        ))
    updateCategory$ = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateCategory),
            mergeMap((action) => this.categoryApi.updateById({ id: action.payload.id, body: action.payload.updatedCategory }).pipe(
                map(() => {
                    this.notificationService.createNotification('success', 'Category Successfuly Updated.', '');
                    return UpdateCategorySuccessful({ payload: action.payload });
                }),
                catchError((error) => {
                    return [
                        { type: CategoryDataStoreActions.ActionTypes.UpdateCategoryFailure },
                    ];
                })
            ))
        )
    );

}
