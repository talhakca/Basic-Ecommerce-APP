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
  }
];

@NgModule({
  declarations: [HomePageComponent, ProductDetailComponent, CartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule, RappiderCardOneListModule, RappiderRateDisplayModule,
    NzButtonModule,
    NzDividerModule],
  exports: [],
})
export class MainModule { }
