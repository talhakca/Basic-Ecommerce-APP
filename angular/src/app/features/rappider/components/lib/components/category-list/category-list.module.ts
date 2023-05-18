import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCategoryListComponent } from './category-list.component';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RouterModule } from '@angular/router';
import { RappiderDividerModule } from '../divider/divider.module';

@NgModule({
  declarations: [RappiderCategoryListComponent],
  imports: [
    CommonModule,
    RappiderTextModule,
    RappiderHeadingModule,
    RappiderDividerModule,
    RouterModule,
  ],
  exports: [RappiderCategoryListComponent],
})
export class RappiderCategoryListModule {}
