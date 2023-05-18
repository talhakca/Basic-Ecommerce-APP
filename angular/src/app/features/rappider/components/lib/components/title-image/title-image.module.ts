import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTitleImageComponent } from './title-image.component';

@NgModule({
  declarations: [RappiderTitleImageComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderImageModule,
    RappiderHeadingModule,
    RouterModule,
  ],
  exports: [RappiderTitleImageComponent],
})
export class RappiderTitleImageModule {}
