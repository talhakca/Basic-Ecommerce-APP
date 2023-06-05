/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AuthControllerService } from './services/auth-controller.service';
import { CartControllerService } from './services/cart-controller.service';
import { CartProductControllerService } from './services/cart-product-controller.service';
import { CartUserControllerService } from './services/cart-user-controller.service';
import { CategoryControllerService } from './services/category-controller.service';
import { CommentControllerService } from './services/comment-controller.service';
import { DeliveryControllerService } from './services/delivery-controller.service';
import { DistributorControllerService } from './services/distributor-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { ProductCategoryControllerService } from './services/product-category-controller.service';
import { ProductControllerService } from './services/product-controller.service';
import { RefundRequestControllerService } from './services/refund-request-controller.service';
import { RoleControllerService } from './services/role-controller.service';
import { TaxControllerService } from './services/tax-controller.service';
import { UserProductControllerService } from './services/user-product-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { WishlistControllerService } from './services/wishlist-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthControllerService,
    CartControllerService,
    CartProductControllerService,
    CartUserControllerService,
    CategoryControllerService,
    CommentControllerService,
    DeliveryControllerService,
    DistributorControllerService,
    PingControllerService,
    ProductCategoryControllerService,
    ProductControllerService,
    RefundRequestControllerService,
    RoleControllerService,
    TaxControllerService,
    UserProductControllerService,
    UserControllerService,
    WishlistControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
