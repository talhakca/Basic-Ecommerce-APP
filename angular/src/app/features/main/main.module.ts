import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Internal Modules */
import { ComponentsModule } from '../rappider/components/lib/components.module';

/* Guards */
import { AuthGuard } from '../auth/guards';
/* HomePage Component */
import { HomePageComponent } from './components/home-page/home-page.component';
import { RappiderCardOneListModule, RappiderEditFormModule, RappiderFeedbackModule, RappiderRateDisplayModule, RappiderStripeModule } from '../rappider/components';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PreviouslyPurchasedComponent } from './components/previously-purchased/previously-purchased.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { OrderSuccessfulComponent } from './components/order-successful/order-successful.component'
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { CommentsStatusComponent } from './components/comments-status/comments-status.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [],
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: PaymentComponent
  },
  {
    path: 'previously-purchased',
    component: PreviouslyPurchasedComponent
  },
  {
    path: 'order-successful',
    component: OrderSuccessfulComponent
  },
  {
    path: 'comment-status',
    component: CommentsStatusComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/features/admin/admin.module')
      .then(module => module.AdminModule)
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    ProductDetailComponent,
    CartComponent,
    PaymentComponent,
    PreviouslyPurchasedComponent,
    OrderSuccessfulComponent,
    CommentsStatusComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    RappiderCardOneListModule,
    RappiderRateDisplayModule,
    NzButtonModule,
    NzDividerModule,
    RappiderStripeModule,
    NzSpinModule,
    NzDropDownModule,
    RappiderFeedbackModule,
    NzCollapseModule,
    NzRateModule,
    NzModalModule,
    RappiderEditFormModule,
    NzCommentModule,
    NzTableModule,
    NzSelectModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class MainModule { }

