import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* app-data-store state */
/* router-data-store state */
import { RouterDataStoreModule } from './router-data-store/router-data-store.module';

/* auth-data-store state */
import { AuthDataStoreModule } from './auth-data-store/auth-data-store.module';
import { ProductDataStoreModule } from './product-data-store/product-data-store.module';
import { CategoryDataStoreModule } from './category-data-store/category-data-store.module';
import { DistributorDataStoreModule } from './distributor-data-store/distributor-data-store.module';
import { CartDataStoreModule } from './cart-data-store/cart-data-store.module';
import { AddressDataStoreModule } from './address-data-store/address-data-store.module';
import { OrderDataStoreModule } from './order-data-store/order-data-store.module';
import { CommentDataStoreModule } from './comment-data-store/comment-data-store.module';
import { AppDataStoreModule } from './app-data-store/app-data-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterDataStoreModule,
    AuthDataStoreModule,
    ProductDataStoreModule,
    CategoryDataStoreModule,
    DistributorDataStoreModule,
    CartDataStoreModule,
    AddressDataStoreModule,
    OrderDataStoreModule,
    CommentDataStoreModule,
    AppDataStoreModule
  ],
  exports: [StoreModule, EffectsModule],
})
export class DataStoresModule { }
