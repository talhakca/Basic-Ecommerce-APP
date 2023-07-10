import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { OrderControllerService } from 'src/app/features/shared/sdk/services';
import { NotificationService } from 'src/app/features/shared/services';
import { SetUser } from '../../auth-data-store/state/auth-data-store.actions';
import { CreateOrder, CreateOrderSuccessful, GetOrdersSuccessful, GetAdminOrdersSuccessful, UpdateOrder, UpdateOrderSuccessful, CreateOrderFailure, GetOrdersFailure, UpdateOrderFailure } from './order-data-store.actions';


@Injectable()
export class OrderDataStoreEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private notificationService: NotificationService,
        private orderApi: OrderControllerService,
        private router: Router
    ) { }

    createOrder$ = createEffect(
        () => this.actions$.pipe(
            ofType(CreateOrder),
            withLatestFrom(this.store.select(state => state.auth.user?.id)),
            mergeMap(([action, userId]) => this.orderApi.create({ body: { ...action.payload.order, userId: userId } }).pipe(
                map((order) => {
                    this.router.navigateByUrl('/order-successful')
                    return CreateOrderSuccessful({ payload: { order: { id: order.id, ...action.payload.order } } })
                }),
                catchError((error) => [CreateOrderFailure({ error: 'Can not create order!' })])
            ))
        )
    );

    getOrders$ = createEffect(
        () => this.actions$.pipe(
            ofType(SetUser),
            withLatestFrom(this.store.select(state => state.auth.user?.id)),
            mergeMap(([action, userId]) => {
                if (userId) {
                    return this.orderApi.find().pipe(
                        mergeMap((orders) => {
                            return [
                                GetOrdersSuccessful({ payload: { orders: orders.filter(order => order.userId === userId) } }),
                                GetAdminOrdersSuccessful({ payload: { orders } })];
                        }),
                        catchError((error) => [GetOrdersFailure({ error: 'Can not get orders!' })])
                    )
                } else {
                    return [GetOrdersSuccessful({ payload: { orders: [] } })];
                }
            })
        )
    );
    updateOrder$ = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateOrder),
            mergeMap((action) => this.orderApi.updateById({ id: action.payload.id, body: action.payload.updatedOrder }).pipe(
                map(() => {
                    this.notificationService.createNotification('success', 'Product Successfuly Updated.', '');
                    return UpdateOrderSuccessful({ payload: action.payload });
                }),
                catchError((error) => [UpdateOrderFailure({ error: 'Can not update order!' })])
            ))
        )
    );

}