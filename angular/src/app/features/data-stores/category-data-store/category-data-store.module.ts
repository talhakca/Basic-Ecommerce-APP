import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CategoryDataStoreEffects } from "./state/category-data-store.effects";
import * as fromCategoryDataStore from './state/category-data-store.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        StoreModule.forFeature(
            fromCategoryDataStore.featureKey,
            fromCategoryDataStore.reducer,
            { initialState: fromCategoryDataStore.initialState }
        ),
        EffectsModule.forFeature([CategoryDataStoreEffects]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class CategoryDataStoreModule { }
