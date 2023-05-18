import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import {
  TestimonialComponentConfig,
  TestimonialColumnCount,
} from '../../utils/testimonial';

@Component({
  selector: 'rappider-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss'],
})
export class RappiderTestimonialListComponent {
  @Input() titles: HeadingComponentConfig[];
  @Input() items: TestimonialComponentConfig[];
  @Input() testimonialColumnCount: TestimonialColumnCount;

  getBootstrapColumnCssClassName() {
    switch (this.testimonialColumnCount) {
      case TestimonialColumnCount.One:
        return 'col-12';
      case TestimonialColumnCount.Two:
        return 'col-lg-6 col-md-12';
      case TestimonialColumnCount.Three:
        return 'col-lg-4 col-md-6 col-sm-12';
      case TestimonialColumnCount.Four:
        return 'col-lg-3 col-md-6 col-sm-12';
      case TestimonialColumnCount.Auto:
        return 'col';
      default:
        return 'col';
    }
  }
}
