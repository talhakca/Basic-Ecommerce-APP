import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { Product, ProductWithRelations } from "src/app/features/shared/sdk/models";
import { ProductControllerService } from "src/app/features/shared/sdk/services";
import { NotificationService } from "src/app/features/shared/services";
import * as ProductDataStoreActions from "./product-data-store.actions";
import { ActionTypes, CreateProduct, CreateProductSuccessful, DeleteProduct, DeleteProductSuccessful, GetProducts, GetProductsSuccessful, UpdateProduct, UpdateProductRate, UpdateProductSuccessful } from "./product-data-store.actions";
import { ProductState } from "./product-data-store.reducer";

@Injectable()
export class ProductDataStoreEffects {
    constructor(
        private actions$: Actions,
        private store: Store<{ productKey: ProductState }>,
        private notificationService: NotificationService,
        private productApi: ProductControllerService,

    ) { }

    getProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(GetProducts),
            mergeMap((action) => this.productApi.find({ filter: { include: [{ relation: 'distributor' }, { relation: 'comments', scope: { include: [{ relation: 'user' }] } }] } }).pipe(
                map((products: ProductWithRelations[]) => GetProductsSuccessful({ payload: { products } })),
                catchError((error) => [ProductDataStoreActions.GetProductsFailure({ error: 'Can not get products!' })])
            ))
        )
    );
    updateProductRate$ = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateProductRate),
            withLatestFrom(this.store.select(state => state.productKey.products)),
            mergeMap(([action, products]) => {
                const product = products.find(product => product.id === action.payload.productId);
                const newRate = ((product.ratingCount * product.rating) + action.payload.rating) / (product.ratingCount + 1);
                return [UpdateProduct({ payload: { id: action.payload.productId, updatedProduct: { rating: newRate, ratingCount: product.ratingCount + 1 } } })];
            }),
            catchError((error) => [ProductDataStoreActions.UpdateProductRateFailure({ error: 'Can not update product-rate!' })])
        )
    );
    updateProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateProduct),
            mergeMap((action) => this.productApi.updateById({ id: action.payload.id, body: action.payload.updatedProduct }).pipe(
                map(() => {
                    this.notificationService.createNotification('success', 'Product Successfuly Updated.', '');
                    return UpdateProductSuccessful({ payload: action.payload });

                }),
                catchError((error) => [ProductDataStoreActions.UpdateProductFailure({ error: 'Can not update product!' })])
            ))
        )
    );
    addProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CreateProduct),
            mergeMap((action) =>
                this.productApi.create({ body: { ...action.payload.product } }).pipe(
                    map((product: Product) => {
                        this.notificationService.createNotification('success', 'Product Successful Added.', '');
                        return CreateProductSuccessful({ payload: { product } })
                    }),
                    catchError((error) => [ProductDataStoreActions.CreateProductFailure({ error: 'Can not create product!' })])
                ))
        ));
    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DeleteProduct),
            mergeMap((action) =>
                this.productApi.deleteById({ id: action.payload.deletedProductId }).pipe(
                    map(() => {
                        this.notificationService.createNotification('success', 'Product Successful Deleted.', '');
                        return DeleteProductSuccessful({ payload: { deletedProductId: action.payload.deletedProductId } })
                    })
                )),
            catchError((error) => [ProductDataStoreActions.DeleteProductFailure({ error: 'Can not delete product!' })])
        ))

}

