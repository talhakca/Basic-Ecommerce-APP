import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ProductDataStoreEffects } from "./state/product-data-store.effects";
import * as fromProductDataStore from './state/product-data-store.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        StoreModule.forFeature(
            fromProductDataStore.featureKey,
            fromProductDataStore.reducer,
            { initialState: fromProductDataStore.initialState }
        ),
        EffectsModule.forFeature([ProductDataStoreEffects]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class ProductDataStoreModule { }

