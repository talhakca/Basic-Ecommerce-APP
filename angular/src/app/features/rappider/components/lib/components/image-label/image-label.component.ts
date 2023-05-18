import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';

@Component({
  selector: 'rappider-image-label',
  templateUrl: './image-label.component.html',
  styleUrls: ['./image-label.component.scss'],
})
export class RappiderImageLabelComponent {
  /**
   * image for label
   *
   * @type {ImageComponentConfig}
   * @memberof ImageLabelComponent
   */
  @Input() image: ImageComponentConfig;
  /**
   * label for image
   *
   * @type {HeadingComponentConfig}
   * @memberof ImageLabelComponent
   */
  @Input() label: HeadingComponentConfig;
  /**
   * router for image & label
   *
   * @type {string}
   * @memberof ImageLabelComponent
   */
  @Input() redirectUrl: string;
}
