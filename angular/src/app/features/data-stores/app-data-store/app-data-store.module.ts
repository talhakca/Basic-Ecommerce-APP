import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
/* reducer */
import * as fromAppDataStore from './state/app-data-store.reducer';

/* effects */
import { AppDataStoreEffects } from './state/app-data-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* AppDataStore State */
    StoreModule.forRoot(
      { app: fromAppDataStore.reducer },
      { initialState: { app: fromAppDataStore.initialState } }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 50, // Retains last 50 states
    }),
    EffectsModule.forRoot([AppDataStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class AppDataStoreModule {}
