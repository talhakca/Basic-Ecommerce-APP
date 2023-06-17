import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* app-data-store state */
import { AppDataStoreModule } from './app-data-store/app-data-store.module';
/* router-data-store state */
import { RouterDataStoreModule } from './router-data-store/router-data-store.module';

/* auth-data-store state */
import { AuthDataStoreModule } from './auth-data-store/auth-data-store.module';
import { ProductDataStoreModule } from './product-data-store/product-data-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* AppDataStore state */
    AppDataStoreModule,
    /* DistributorDataStore state */
    /* RouterDataStore state */
    RouterDataStoreModule,
    /* AuthDataStore state */
    AuthDataStoreModule,
    ProductDataStoreModule
  ],
  exports: [StoreModule, EffectsModule],
})
export class DataStoresModule { }
