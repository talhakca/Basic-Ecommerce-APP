import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { forkJoin, of } from "rxjs";
import { withLatestFrom, mergeMap, map, catchError } from "rxjs/operators";
import { CartControllerService } from "src/app/features/shared/sdk/services";
import { NotificationService } from "src/app/features/shared/services";
import { SetUser } from "../../auth-data-store/state/auth-data-store.actions";
import { ActionTypes, AddToCart, AddToCartFailure, AddToCartSuccessful, GetCartFailure, GetCartSuccessful, RefundCarts, RefundCartsFailure, RefundCartsSuccessful, UpdateCart, UpdateCartFailure, UpdateCartSuccessful } from "./cart-data-store.actions";

@Injectable()
export class CartDataStoreEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private notificationService: NotificationService,
        private cartApi: CartControllerService
    ) { }

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
                    }),
                    catchError((error) => of(AddToCartFailure({ error })))
                )
            })
        )
    )

    getCart$ = createEffect(
        () => this.actions$.pipe(
            ofType(SetUser),
            withLatestFrom(this.store.select(state => state.auth.user?.id)),
            mergeMap(([action, userId]) => this.cartApi.find({ filter: { include: [{ relation: 'product', scope: { include: [{ relation: 'distributor' }] }, }, { relation: 'user' }] } }).pipe(
                map((carts) => GetCartSuccessful({ payload: { cart: carts.filter(cart => cart.product && cart.userId === userId), adminCart: carts.filter(cart => cart.orderId) } })),
                catchError((error) => [GetCartFailure({ error: 'Can not get carts!' })])

            ))
        )
    );

    refundCarts$ = createEffect(
        () => this.actions$.pipe(
            ofType(RefundCarts),
            mergeMap((action) => {
                const requests = action.payload.cartIds.map(cartId => this.cartApi.updateById({ id: cartId, body: { refundStatus: 'PENDING' } }));
                return forkJoin(requests).pipe(
                    mergeMap(res => {
                        console.log(res);
                        this.notificationService.createNotification('success', 'We have successfully sent your refund requests. As soon as one of our staff inspect it, your refund status will be updated.', '');
                        return [RefundCartsSuccessful({ payload: { cartIds: action.payload.cartIds } })];
                    }),
                    catchError((error) => [RefundCartsFailure({ error: 'Can not refund cart!' })])
                )
            })
        ));


    updateCart$ = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateCart),
            mergeMap((action) => this.cartApi.updateById({ id: action.payload.id, body: { ...action.payload.updatedCart } }).pipe(
                map(() => {
                    this.notificationService.createNotification('success', 'We have successfuly updated cart.', '');
                    return UpdateCartSuccessful({ payload: action.payload });
                }),
                catchError((error) => [UpdateCartFailure({ error: 'Can not update cart!' })])
            ))
        ));


}