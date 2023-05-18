import { Component, Input, OnInit } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ProductRecommendationItem } from '../../utils/product-recommendations/product-recommendation-item.interface';

@Component({
  selector: 'rappider-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.scss'],
})
export class RappiderProductRecommendationsComponent {
  @Input() title: HeadingComponentConfig;
  @Input() items: ProductRecommendationItem[];
}
