import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
/* reducer */
import * as fromRouterDataStore from './state/router-data-store.reducer';

/* effects */
import { RouterDataStoreEffects } from './state/router-data-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* RouterDataStore State */
    StoreModule.forFeature(
      fromRouterDataStore.featureKey,
      fromRouterDataStore.reducer,
      { initialState: fromRouterDataStore.initialState }
    ),
    EffectsModule.forFeature([RouterDataStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class RouterDataStoreModule {}
