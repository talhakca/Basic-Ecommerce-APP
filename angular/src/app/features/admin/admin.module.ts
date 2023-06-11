import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryComponent } from './edit-category/edit-category/edit-category.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product/edit-product.component';

import { RefundStatusComponent } from './refund-status/refund-status.component';
import { RappiderListGridModule } from '../rappider/components';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
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
    path: 'deliveries',
    component: DeliveryListComponent
  }
];

@NgModule({
  declarations: [
    EditCategoryComponent,
    AdminPanelComponent,
    EditProductComponent,
    RefundStatusComponent,
    DeliveryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RappiderListGridModule,
    NzTableModule,
    NzSelectModule
  ]
})
export class AdminModule { }
