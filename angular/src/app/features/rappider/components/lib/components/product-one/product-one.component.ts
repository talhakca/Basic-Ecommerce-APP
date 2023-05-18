import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { Tag } from '../../utils/tag/tag.interface';
import { DividerComponentConfig } from '../../utils/divider';

@Component({
  selector: 'rappider-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.scss'],
})
export class RappiderProductOneComponent {
  /* data to emit */
  @Input() data: any;
  @Input() productImage: ImageComponentConfig;
  @Input() tag: Tag;
  @Input() rate: number;
  @Input() title: HeadingComponentConfig;
  @Input() additionalTitle: HeadingComponentConfig;
  @Input() currency: string;
  @Input() finalPrice: number;
  @Input() price: number;
  @Input() divider: DividerComponentConfig;

  @Output() cardClick = new EventEmitter();

  onCardClick() {
    this.cardClick.emit(this.data);
  }
}
