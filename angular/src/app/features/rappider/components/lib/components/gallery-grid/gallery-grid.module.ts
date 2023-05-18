import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderGalleryGridComponent } from './gallery-grid.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderGalleryGridComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    RappiderImageModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderGalleryGridComponent],
})
export class RappiderGalleryGridModule {}
