import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderProductComponent } from './product.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderProductComponent],
  imports: [
    CommonModule,
    RappiderImageModule,
    RappiderTagModule,
    RappiderButtonModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderProductComponent],
})
export class RappiderProductModule {}
