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
import { InitApp } from './app-data-store.actions';
import { AddressControllerService, CartControllerService, CategoryControllerService, CommentControllerService, DistributorControllerService, OrderControllerService, ProductControllerService, UserProductControllerService } from 'src/app/features/shared/sdk/services';
import { Category, CategoryWithRelations, Distributor, DistributorWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';
import { LoggedIn, SetUser } from '../../auth-data-store/state/auth-data-store.actions';
import { Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';

export const navigatePathAfterCreatingInstance = null;
export const navigatePathAfterUpdatingInstance = null;

@Injectable()
export class AppDataStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private notificationService: NotificationService,
    private cartApi: CartControllerService,
    private orderApi: OrderControllerService,
    private router: Router,
    private commentApi: CommentControllerService,
    private addressApi: AddressControllerService
  ) { }
}
