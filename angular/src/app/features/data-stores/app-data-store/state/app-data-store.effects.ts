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
import { GetProductsSuccessful, InitApp, GetCategoriesSuccessful, GetDistributorsSuccessful, AddToCart, AddToCartSuccessful, GetCart, GetCartSuccessful, CreateOrder, CreateOrderSuccessful, GetOrders, GetOrdersSuccessful, UpdateProductRate, UpdateProductRateSuccessful, UpdateProduct, UpdateProductSuccessful, CreateComment, CreateCommentSuccessful, UpdateComment, UpdateCommentSuccessful, CreateCategory, CreateCategorySuccessful, DeleteCategory, DeleteCategorySuccessful } from './app-data-store.actions';
import { CartControllerService, CategoryControllerService, CommentControllerService, DistributorControllerService, OrderControllerService, ProductControllerService, UserProductControllerService } from 'src/app/features/shared/sdk/services';
import { Category, CategoryWithRelations, DistributorWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';
import { LoggedIn, SetUser } from '../../auth-data-store/state/auth-data-store.actions';
import { Router } from '@angular/router';

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
    private cartApi: CartControllerService,
    private orderApi: OrderControllerService,
    private router: Router,
    private commentApi: CommentControllerService
  ) { }

  getProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(InitApp),
      mergeMap((action) => this.productApi.find({ filter: { include: [{ relation: 'distributor' }, { relation: 'comments', scope: { include: [{ relation: 'user' }] } }] } }).pipe(
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
          this.router.navigateByUrl('/order-successful')
          return CreateOrderSuccessful({ payload: { order: { id: order.id, ...action.payload.order } } })
        })
      ))
    )
  );

  getOrders$ = createEffect(
    () => this.actions$.pipe(
      ofType(SetUser),
      withLatestFrom(this.store.select(state => state.auth.user?.id)),
      mergeMap(([action, userId]) => {
        if (userId) {
          return this.orderApi.find({ filter: { where: { userId: userId } } }).pipe(
            map((orders) => {
              return GetOrdersSuccessful({ payload: { orders } })
            })
          )
        } else {
          return [GetOrdersSuccessful({ payload: { orders: [] } })];
        }
      })
    )
  );

  updateProductRate$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateProductRate),
      withLatestFrom(this.store.select(state => state.app.products)),
      mergeMap(([action, products]) => {
        const product = products.find(product => product.id === action.payload.productId);
        const newRate = ((product.ratingCount * product.rating) + action.payload.rating) / (product.ratingCount + 1);
        return [UpdateProduct({ payload: { id: action.payload.productId, updatedProduct: { rating: newRate, ratingCount: product.ratingCount + 1 } } })];
      })
    )
  );

  updateProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateProduct),
      mergeMap((action) => this.productApi.updateById({ id: action.payload.id, body: action.payload.updatedProduct }).pipe(
        map(() => {
          this.notificationService.createNotification('success', 'Product Successfuly Updated.', '');
          return UpdateProductSuccessful({ payload: action.payload });
        })
      ))
    )
  );

  createComment$ = createEffect(
    () => this.actions$.pipe(
      ofType(CreateComment),
      withLatestFrom(this.store.select(state => state.auth.user)),
      mergeMap(([action, user]) => this.commentApi.create({ body: { ...action.payload.comment, status: 'PENDING', userId: user.id } }).pipe(
        map((comment) => {
          this.notificationService.createNotification('success', 'We have successfuly uploaded your comment. As soon as on of our staff reviews it, it will be published.', '');
          return CreateCommentSuccessful({ payload: { comment: { ...comment, user: user } } });
        })
      ))
    )
  );

  updateComment$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateComment),
      mergeMap((action) => this.commentApi.updateById({ id: action.payload.id, body: action.payload.comment }).pipe(
        map((comment) => {
          this.notificationService.createNotification('success', 'We have successfuly updated comment', '');
          return UpdateCommentSuccessful({ payload: { id: action.payload.id, comment: comment, productId: action.payload.productId } });
        })
      ))
    )
  );
  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateCategory),
      mergeMap((action) =>
        this.categoryApi.create({ body: { ...action.payload.category } }).pipe(
          map((category: Category) => CreateCategorySuccessful({ payload: { category: [category] } }))
        )
      )
    )
  );
  deleteCategory$ = createEffect(
    () => this.actions$.pipe(
      ofType(DeleteCategory),
      mergeMap((action) => this.categoryApi.deleteById({ id: action.payload }).pipe(
        map((response: string) => DeleteCategorySuccessful({ payload: response }))
      ))
    ))

}
