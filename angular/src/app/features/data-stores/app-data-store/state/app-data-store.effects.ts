import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';

/* notification service '@rappider/services' */
import { NotificationService } from 'src/app/features/shared/services/notification-service/notification.service';

/* lodash lib */
import * as lodash from 'lodash';

/* navigate action */
import { Navigate } from 'src/app/features/data-stores/router-data-store/state/router-data-store.actions';
import { GetProductsSuccessful, InitApp, GetCategoriesSuccessful, GetDistributorsSuccessful, AddToCart, AddToCartSuccessful, GetCart, GetCartSuccessful, CreateOrder, CreateOrderSuccessful, AddProduct, AddProductSuccessful, AddCategory, AddCategorySuccessful, DeleteCategory, DeleteCategorySuccessful, UpdateCategory, UpdateCategorySuccessful } from './app-data-store.actions';
import { CartControllerService, CategoryControllerService, DistributorControllerService, OrderControllerService, ProductControllerService, UserProductControllerService } from 'src/app/features/shared/sdk/services';
import { Category, CategoryWithRelations, DistributorWithRelations, NewCategory, NewProduct, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';
import { SetUser } from '../../auth-data-store/state/auth-data-store.actions';

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
    private cartApi: CartControllerService,
    private orderApi: OrderControllerService
  ) { }

  addCategory$ = createEffect(
    () => this.actions$.pipe(
      ofType(AddCategory),
      mergeMap((action) => this.categoryApi.create({ body: action.payload }).pipe(
        map((newCategory: Category) => AddCategorySuccessful({ payload: { newCategories: [newCategory] } }))
      ))
    ))

  addProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(AddProduct),
      mergeMap((action) => this.productApi.create({ body: action.payload }).pipe(
        map((newProduct: Product) => AddProductSuccessful({ payload: { newProducts: [newProduct] } }))
      ))
    )
  )
  getProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(InitApp),
      mergeMap((action) => this.productApi.find({ filter: { include: [{ relation: 'distributor' }] } }).pipe(
        map((products: ProductWithRelations[]) => GetProductsSuccessful({ payload: { products } }))
      ))
    )
  );

  getDistributors$ = createEffect(
    () => this.actions$.pipe(
      ofType(InitApp),
      mergeMap((action) => this.distributorApi.find().pipe(
        map((distributors: DistributorWithRelations[]) => GetDistributorsSuccessful({ payload: { distributors } }))
      ))
    )
  );

  getCategory$ = createEffect(
    () => this.actions$.pipe(
      ofType(InitApp),
      mergeMap((action) => this.categoryApi.find().pipe(
        map((categories: CategoryWithRelations[]) => GetCategoriesSuccessful({ payload: { categories } }))
      ))
    )
  )

  addToCart$ = createEffect(
    () => this.actions$.pipe(
      ofType(AddToCart),
      withLatestFrom(
        this.store.select(state => state.auth.user?.id),
        this.store.select(state => state.app.products)
      ),
      mergeMap(([action, userId, products]) => {
        return this.cartApi.create({ body: { userId: userId, productId: action.payload.productId } }).pipe(
          map((cart) => {
            this.notificationService.createNotification('success', 'Product Added To Cart', '');
            return AddToCartSuccessful({ payload: { cart: { ...cart, product: products.find(product => product.id === action.payload.productId) } } });
          })
        )
      })
    )
  )

  getCart$ = createEffect(
    () => this.actions$.pipe(
      ofType(SetUser),
      withLatestFrom(this.store.select(state => state.auth.user?.id)),
      mergeMap(([action, userId]) => this.cartApi.find({ filter: { where: { userId: userId }, include: [{ relation: 'product', scope: { include: [{ relation: 'distributor' }] } }] } }).pipe(
        map((carts) => GetCartSuccessful({ payload: { cart: carts.filter(cart => cart.product) } }))
      ))
    )
  );

  createOrder$ = createEffect(
    () => this.actions$.pipe(
      ofType(CreateOrder),
      withLatestFrom(this.store.select(state => state.auth.user?.id)),
      mergeMap(([action, userId]) => this.orderApi.create({ body: { ...action.payload.order, userId: userId } }).pipe(
        map((order) => {
          console.log(order);
          return CreateOrderSuccessful({ payload: { order } })
        })
      ))
    )
  );

  deleteCategory$ = createEffect(
    () => this.actions$.pipe(
      ofType(DeleteCategory),
      mergeMap((action) => this.categoryApi.deleteById({ id: action.payload }).pipe(
        map((response: string) => DeleteCategorySuccessful({ payload: response }))
      ))
    ))
  updateCategory$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateCategory),
      mergeMap((action) => this.categoryApi.updateById({ id: action.payload.id, body: action.payload.updatedData }).pipe(
        map((updatedCategory: Category) => UpdateCategorySuccessful({ payload: updatedCategory }))
      ))
    )
  );

}

