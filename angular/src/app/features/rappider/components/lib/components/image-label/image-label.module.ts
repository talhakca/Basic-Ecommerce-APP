import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderImageLabelComponent } from './image-label.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RappiderImageLabelComponent],
  imports: [
    CommonModule,
    RappiderImageModule,
    RappiderHeadingModule,
    RouterModule,
  ],
  exports: [RappiderImageLabelComponent],
})
export class RappiderImageLabelModule {}
