import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryComponent } from './edit-category/edit-category/edit-category.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product/edit-product.component';

import { RefundStatusComponent } from './refund-status/refund-status.component';
import { RappiderEditFormModule, RappiderListGridModule } from '../rappider/components';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
export const routes: Routes = [
  {
    path: 'edit-category',
    component: EditCategoryComponent
  },
  {
    path: '',
    component: AdminPanelComponent
  },
  {
    path: 'edit-product',
    component: EditProductComponent
  },
  {
    path: 'refund-status',
    component: RefundStatusComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products-edit/:id',
    component: ProductEditComponent
  }
];

@NgModule({
  declarations: [
    EditCategoryComponent,
    AdminPanelComponent,
    EditProductComponent,
    RefundStatusComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RappiderListGridModule,
    NzTableModule,
    NzSelectModule,
    RappiderEditFormModule
  ]
})
export class AdminModule { }
