import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Distributor, DistributorWithRelations } from "src/app/features/shared/sdk/models";
import { DistributorControllerService } from "src/app/features/shared/sdk/services";
import { NotificationService } from "src/app/features/shared/services";
import { ActionTypes, CreateDistributor, CreateDistributorSuccessful, DeleteDistributor, DeleteDistributorSuccessful, GetDistributors, GetDistributorsSuccessful, UpdateDistributor, UpdateDistributorSuccessful } from "./distributor-data-store.actions";

@Injectable()
export class DistributorDataStoreEffects {
    constructor(
        private actions$: Actions,
        private distributorApi: DistributorControllerService,
        private notificationService: NotificationService

    ) { }

    getDistributors$ = createEffect(
        () => this.actions$.pipe(
            ofType(GetDistributors),
            mergeMap((action) => this.distributorApi.find().pipe(
                map((distributors: DistributorWithRelations[]) => GetDistributorsSuccessful({ payload: { distributors } })),
                catchError((error) => {
                    return [
                        { type: ActionTypes.GetDistributorsFailure },
                    ];
                })
            ))
        ))
    addDistributor$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CreateDistributor),
            mergeMap((action) =>
                this.distributorApi.create({ body: { ...action.payload.distributor } }).pipe(
                    map((distributor: Distributor) => {
                        this.notificationService.createNotification('success', 'Distributor Successful Added.', '');
                        return CreateDistributorSuccessful({ payload: { distributor } })
                    }
                    ),
                    catchError((error) => {
                        return [
                            { type: ActionTypes.CreateDistributorFailure },
                        ];
                    }))
            )))

    deleteDistributor$ = createEffect(
        () => this.actions$.pipe(
            ofType(DeleteDistributor),
            mergeMap((action) => this.distributorApi.deleteById({ id: action.payload.deletedDistributorId }).pipe(
                map(() => {
                    this.notificationService.createNotification('success', 'Distributor Successful Deleted.', '');
                    return DeleteDistributorSuccessful({ payload: { deletedDistributorId: action.payload.deletedDistributorId } })
                }),
                catchError((error) => {
                    return [
                        { type: ActionTypes.DeleteDistributorFailure },
                    ];
                })
            ))
        )
    )
    updateDistributor$ = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateDistributor),
            mergeMap((action) => this.distributorApi.updateById({ id: action.payload.id, body: action.payload.updatedDistributor }).pipe(
                map(() => {
                    this.notificationService.createNotification('success', 'Distributor Successfuly Updated.', '');
                    return UpdateDistributorSuccessful(({ payload: action.payload }));
                }),
                catchError((error) => {
                    return [
                        { type: ActionTypes.DeleteDistributorFailure },
                    ];
                })
            ))
        )

    )


}