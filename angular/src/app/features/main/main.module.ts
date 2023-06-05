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
import { RappiderCardOneListModule, RappiderRateDisplayModule } from '../rappider/components';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { DeleteProductComponent } from './components/admin/delete-product/delete-product.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';

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
    path: 'admin',
    component: AdminComponent
  },
  { path: 'admin/addproduct', component: AddProductComponent },
  { path: 'admin/deleteproduct', component: DeleteProductComponent },
  { path: 'admin/updateproduct', component: UpdateProductComponent }
];

@NgModule({
  declarations: [HomePageComponent, ProductDetailComponent, CartComponent, AdminComponent, AddProductComponent, DeleteProductComponent, UpdateProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule, RappiderCardOneListModule, RappiderRateDisplayModule,
    NzButtonModule,
    NzDividerModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [],
})
export class MainModule { }
