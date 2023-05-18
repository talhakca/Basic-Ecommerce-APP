import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCarouselComponent } from './carousel.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [RappiderCarouselComponent],
  imports: [CommonModule, NzCarouselModule],
  exports: [RappiderCarouselComponent],
})
export class RappiderCarouselModule {}
