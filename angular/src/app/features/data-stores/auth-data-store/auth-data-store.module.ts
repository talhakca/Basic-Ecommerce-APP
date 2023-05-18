import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* reducer */
import * as fromAuthDataStore from './state/auth-data-store.reducer';

/* effects */
import { AuthDataStoreEffects } from './state/auth-data-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* AuthDataStore State */
    StoreModule.forFeature(
      fromAuthDataStore.featureKey,
      fromAuthDataStore.reducer,
      { initialState: fromAuthDataStore.initialState }
    ),
    EffectsModule.forFeature([AuthDataStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class AuthDataStoreModule {}
