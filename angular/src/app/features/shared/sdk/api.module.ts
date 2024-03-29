/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AddressControllerService } from './services/address-controller.service';
import { AuthControllerService } from './services/auth-controller.service';
import { CartControllerService } from './services/cart-controller.service';
import { CartProductControllerService } from './services/cart-product-controller.service';
import { CartUserControllerService } from './services/cart-user-controller.service';
import { CategoryControllerService } from './services/category-controller.service';
import { CommentControllerService } from './services/comment-controller.service';
import { CommentUserControllerService } from './services/comment-user-controller.service';
import { DeliveryControllerService } from './services/delivery-controller.service';
import { DistributorControllerService } from './services/distributor-controller.service';
import { OrderControllerService } from './services/order-controller.service';
import { OrderAddressControllerService } from './services/order-address-controller.service';
import { OrderCartControllerService } from './services/order-cart-controller.service';
import { OrderUserControllerService } from './services/order-user-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { ProductCategoryControllerService } from './services/product-category-controller.service';
import { ProductControllerService } from './services/product-controller.service';
import { ProductCommentControllerService } from './services/product-comment-controller.service';
import { RefundRequestControllerService } from './services/refund-request-controller.service';
import { RoleControllerService } from './services/role-controller.service';
import { TaxControllerService } from './services/tax-controller.service';
import { UserProductControllerService } from './services/user-product-controller.service';
import { UserAddressControllerService } from './services/user-address-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { UserRoleControllerService } from './services/user-role-controller.service';
import { WishlistControllerService } from './services/wishlist-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AddressControllerService,
    AuthControllerService,
    CartControllerService,
    CartProductControllerService,
    CartUserControllerService,
    CategoryControllerService,
    CommentControllerService,
    CommentUserControllerService,
    DeliveryControllerService,
    DistributorControllerService,
    OrderControllerService,
    OrderAddressControllerService,
    OrderCartControllerService,
    OrderUserControllerService,
    PingControllerService,
    ProductCategoryControllerService,
    ProductControllerService,
    ProductCommentControllerService,
    RefundRequestControllerService,
    RoleControllerService,
    TaxControllerService,
    UserProductControllerService,
    UserAddressControllerService,
    UserControllerService,
    UserRoleControllerService,
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
