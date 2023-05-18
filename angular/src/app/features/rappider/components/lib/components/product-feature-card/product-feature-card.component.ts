import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { ProductFeatureItem } from '../../utils/product-feature/product-feature-item.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-product-feature-card',
  templateUrl: './product-feature-card.component.html',
  styleUrls: ['./product-feature-card.component.scss'],
})
export class RappiderProductFeatureCardComponent {
  /* heading */
  @Input() heading: HeadingComponentConfig;
  /* image */
  @Input() image: ImageComponentConfig;
  /* text */
  @Input() price: TextComponentConfig;
  /* additional content-text */
  @Input() additionalContents: TextComponentConfig[];
  /* rating of the product */
  @Input() rate: number;
  /* feature and detail input */
  @Input() items: ProductFeatureItem[];
}
