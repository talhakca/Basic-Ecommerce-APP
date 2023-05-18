import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTestimonialListComponent } from './testimonial-list.component';
import { RappiderTestimonialModule } from '../testimonial/testimonial.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderTestimonialListComponent],
  imports: [CommonModule, RappiderTestimonialModule, RappiderHeadingModule],
  exports: [RappiderTestimonialListComponent],
})
export class RappiderTestimonialListModule {}
