import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CartDataStoreEffects } from "./state/cart-data-store.effects";
import * as fromCartDataStore from './state/cart-data-store.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        StoreModule.forFeature(
            fromCartDataStore.featureKey,
            fromCartDataStore.reducer,
            { initialState: fromCartDataStore.initialState }
        ),
        EffectsModule.forFeature([CartDataStoreEffects]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class CartDataStoreModule { }