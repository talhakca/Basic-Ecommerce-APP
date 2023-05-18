import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderImageUploadComponent } from './image-upload.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderSpinModule } from '../spin/spin.module';

@NgModule({
  declarations: [RappiderImageUploadComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    RappiderImageModule,
    RappiderSpinModule,
  ],
  exports: [RappiderImageUploadComponent],
})
export class RappiderImageUploadModule {}
