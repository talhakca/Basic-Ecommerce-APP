import { Component, Input } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar';
import { HeadingComponentConfig } from '../../utils/heading';

@Component({
  selector: 'rappider-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class RappiderTestimonialComponent {
  /* title  */
  @Input() title: HeadingComponentConfig;
  /* subtitle  */
  @Input() subtitle: HeadingComponentConfig;
  /* avatar  */
  @Input() avatar: AvatarComponentConfig;
  /* content  */
  @Input() content: string;
}
