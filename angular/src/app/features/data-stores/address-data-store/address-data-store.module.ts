import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AddressDataStoreEffects } from "./state/address-data-store.effects";
import * as fromAddressDataStore from './state/address-data-store.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        StoreModule.forFeature(
            fromAddressDataStore.featureKey,
            fromAddressDataStore.reducer,
            { initialState: fromAddressDataStore.initialState }
        ),
        EffectsModule.forFeature([AddressDataStoreEffects]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class AddressDataStoreModule { }