import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderImageComponent } from './image.component';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [RappiderImageComponent],
  imports: [CommonModule, NzImageModule],
  exports: [RappiderImageComponent],
})
export class RappiderImageModule {}
