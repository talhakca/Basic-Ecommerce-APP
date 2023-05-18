import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import { IconComponentConfig } from '../../utils/icon';
import { ImageComponentConfig } from '../../utils/image';
import { ParagraphComponentConfig } from '../../utils/paragraph/paragraph-component-config.interface';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-product-preview-card',
  templateUrl: './product-preview-card.component.html',
  styleUrls: ['./product-preview-card.component.scss'],
})
export class RappiderProductPreviewCardComponent {
  /* heading for additional theme of the product */
  @Input() additionalContent: HeadingComponentConfig;
  /* image  */
  @Input() image: ImageComponentConfig;
  /* directive for navigating to the target image */
  @Input() redirectUrl: string;
  /* heading content*/
  @Input() priceTitle: HeadingComponentConfig;
  /* directive for navigating to the image */
  @Input() imageRedirectUrl: string;
  /* directive for adding the product to buy */
  @Input() icon: IconComponentConfig;
  /* some information about the product */
  @Input() description: ParagraphComponentConfig;
  /* product name */
  @Input() productName: HeadingComponentConfig;
}
