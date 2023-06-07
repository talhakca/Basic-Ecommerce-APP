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
import { RappiderCardOneListModule, RappiderRateDisplayModule, RappiderStripeModule } from '../rappider/components';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AdminComponent } from './components/admin/admin.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { DeleteProductComponent } from './components/admin/delete-product/delete-product.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  { path: 'admin/addproduct', component: AddProductComponent },
  { path: 'admin/deleteproduct', component: DeleteProductComponent },
  { path: 'admin/updateproduct', component: UpdateProductComponent },
  {
    path: 'admin',
    component: AdminComponent
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    ProductDetailComponent,
    CartComponent,
    PaymentComponent,
    AdminComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    RappiderCardOneListModule,
    RappiderRateDisplayModule,
    NzButtonModule,
    NzDividerModule,
    RappiderStripeModule,
    NzSpinModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class MainModule { }
