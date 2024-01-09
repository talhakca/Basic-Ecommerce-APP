import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DistributorDataStoreEffects } from "./state/distributor-data-store.effects";
import * as fromDistributorDataStore from './state/distributor-data-store.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        StoreModule.forFeature(
            fromDistributorDataStore.featureKey,
            fromDistributorDataStore.reducer,
            { initialState: fromDistributorDataStore.initialState }
        ),
        EffectsModule.forFeature([DistributorDataStoreEffects]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class DistributorDataStoreModule { }