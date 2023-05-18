import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderImageGalleryComponent } from './image-gallery.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderImageModule } from '../image/image.module';

@NgModule({
  declarations: [RappiderImageGalleryComponent],
  imports: [CommonModule, RappiderButtonModule, RappiderImageModule],
  exports: [RappiderImageGalleryComponent],
})
export class RappiderImageGalleryModule {}
