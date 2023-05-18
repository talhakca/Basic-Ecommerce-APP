import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTestimonialComponent } from './testimonial.component';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderTestimonialComponent],
  imports: [CommonModule, RappiderAvatarModule, RappiderHeadingModule],
  exports: [RappiderTestimonialComponent],
})
export class RappiderTestimonialModule {}
