import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { RefundStatusComponent } from './refund-status/refund-status.component';
import { RappiderEditFormModule, RappiderListGridModule } from '../rappider/components';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { AddDistributorComponent } from './add-distributor/add-distributor.component';
import { DistributorEditComponent } from './distributor-edit/distributor-edit.component';
import { DistributorListComponent } from './distributor-list/distributor-list.component';
export const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent
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
  },
  {
    path: 'deliveries',
    component: DeliveryListComponent
  },
  {
    path: 'product-add',
    component: AddProductComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'category-add',
    component: AddCategoryComponent
  },
  {
    path: 'category-edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'distributors',
    component: DistributorListComponent
  },
  {
    path: 'distributor-edit/:id',
    component: DistributorEditComponent
  },
  {
    path: 'distributor-add',
    component: AddDistributorComponent
  },
];

@NgModule({
  declarations: [
    AdminPanelComponent,
    RefundStatusComponent,
    ProductListComponent,
    ProductEditComponent,
    DeliveryListComponent,
    AddProductComponent,
    AddCategoryComponent,
    CategoryListComponent,
    CategoryEditComponent,
    AddDistributorComponent,
    DistributorEditComponent,
    DistributorListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RappiderListGridModule,
    NzTableModule,
    NzSelectModule,
    RappiderEditFormModule,
    PdfViewerModule,
    NzSpinModule
  ]
})
export class AdminModule { }
