import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { withLatestFrom, mergeMap, map, catchError } from "rxjs/operators";
import { AddressControllerService } from "src/app/features/shared/sdk/services";
import { SetUser } from "../../auth-data-store/state/auth-data-store.actions";
import { GetAddressesFailure, GetAddressesSuccessful } from "./address-data-store.actions";

@Injectable()
export class AddressDataStoreEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private addressApi: AddressControllerService
    ) { }

    getAddresses$ = createEffect(
        () => this.actions$.pipe(
            ofType(SetUser),
            withLatestFrom(this.store.select(state => state.auth.user)),
            mergeMap(([action, user]) => {
                if (user.id && ['salesManager', 'productManager'].includes(user.role?.key)) {
                    return this.addressApi.find().pipe(
                        map((addresses) => {
                            return GetAddressesSuccessful({ payload: { addresses } });
                        }),
                        catchError((error) => of(GetAddressesFailure({ error })))
                    )
                } else {
                    return [GetAddressesSuccessful({ payload: { addresses: [] } })];
                }
            })
        )
    );

}