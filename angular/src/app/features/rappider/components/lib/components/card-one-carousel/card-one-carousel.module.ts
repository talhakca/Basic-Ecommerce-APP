import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardOneCarouselComponent } from './card-one-carousel.component';
import { RappiderCardOneModule } from '../card-one/card-one.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderButtonModule } from '../button/button.module';
@NgModule({
  declarations: [RappiderCardOneCarouselComponent],
  imports: [
    CommonModule,
    RappiderCardOneModule,
    RappiderHeadingModule,
    RappiderButtonModule,
  ],
  exports: [RappiderCardOneCarouselComponent],
})
export class RappiderCardOneCarouselModule {}
