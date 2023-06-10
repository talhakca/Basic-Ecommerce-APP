import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryComponent } from './edit-category/edit-category/edit-category.component';
import { AdminPanelComponent } from './admin-panel/admin-panel/admin-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product/edit-product.component';

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
  }
];

@NgModule({
  declarations: [
    EditCategoryComponent,
    AdminPanelComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
