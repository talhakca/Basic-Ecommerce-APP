import { Component, Input } from '@angular/core';
import { Tag } from '../../utils/tag';

@Component({
  selector: 'rappider-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
})
export class RappiderPromoComponent {
  /* text */
  @Input() text: string;
  @Input() tag: Tag;
  /* image url for background  */
  @Input() backgroundImageUrl: string;
  /* redirect url for redirection */
  @Input() redirectUrl: string;
  /* Text's color */
  @Input() textColor: string;
  /* image height */
  @Input() imageHeight: string;
}
