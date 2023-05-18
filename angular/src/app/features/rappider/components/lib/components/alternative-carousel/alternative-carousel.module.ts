import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderAlternativeCarouselComponent } from './alternative-carousel.component';
import { RappiderCardOneModule } from '../card-one/card-one.module';
import { SwiperModule } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Mousewheel,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Mousewheel]);

@NgModule({
  declarations: [RappiderAlternativeCarouselComponent],
  imports: [CommonModule, RappiderCardOneModule, SwiperModule],
  exports: [RappiderAlternativeCarouselComponent],
})
export class RappiderAlternativeCarouselModule {}
