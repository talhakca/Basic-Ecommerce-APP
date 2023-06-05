import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';

/* notification service '@rappider/services' */
import { NotificationService } from 'src/app/features/shared/services/notification-service/notification.service';

/* lodash lib */
import * as lodash from 'lodash';

/* navigate action */
import { Navigate } from 'src/app/features/data-stores/router-data-store/state/router-data-store.actions';
import { GetProductsSuccessful, InitApp, GetCategoriesSuccessful, GetDistributorsSuccessful, AddToCart } from './app-data-store.actions';
import { CategoryControllerService, DistributorControllerService, ProductControllerService, UserProductControllerService } from 'src/app/features/shared/sdk/services';
import { CategoryWithRelations, DistributorWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';

export const navigatePathAfterCreatingInstance = null;
export const navigatePathAfterUpdatingInstance = null;

@Injectable()
export class AppDataStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private notificationService: NotificationService,
    private productApi: ProductControllerService,
    private categoryApi: CategoryControllerService,
    private distributorApi: DistributorControllerService,
    private userProductApi: UserProductControllerService,
  ) { }

  getProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(InitApp),
      mergeMap((action) => this.productApi.find({ filter: { include: ['distributor'] } }).pipe(
        map((products: ProductWithRelations[]) => GetProductsSuccessful({ payload: { products } }))
      ))
    )
  )

  getDistributorss$ = createEffect(
    () => this.actions$.pipe(
      ofType(InitApp),
      mergeMap((action) => this.distributorApi.find().pipe(
        map((distributors: DistributorWithRelations[]) => GetDistributorsSuccessful({ payload: { distributors } }))
      ))
    )
  )

  getCategory$ = createEffect(
    () => this.actions$.pipe(
      ofType(InitApp),
      mergeMap((action) => this.categoryApi.find().pipe(
        map((categories: CategoryWithRelations[]) => GetCategoriesSuccessful({ payload: { categories } }))
      ))
    )
  )

  // addToCart$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(AddToCart),
  //     mergeMap((action) => this.userProductApi.create({ body: { id:} }).pipe(
  //       map((categories: CategoryWithRelations[]) => GetCategoriesSuccessful({ payload: { categories } }))
  //     ))
  //   )
  // )
}
