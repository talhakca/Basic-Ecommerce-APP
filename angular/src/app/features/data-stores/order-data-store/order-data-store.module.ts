import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { OrderDataStoreEffects } from "./state/order-data-store.effects";
import * as fromOrderDataStore from './state/order-data-store.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        StoreModule.forFeature(
            fromOrderDataStore.featureKey,
            fromOrderDataStore.reducer,
            { initialState: fromOrderDataStore.initialState }
        ),
        EffectsModule.forFeature([OrderDataStoreEffects]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class OrderDataStoreModule { }