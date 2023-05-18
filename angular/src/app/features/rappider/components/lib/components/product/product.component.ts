import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { Tag } from '../../utils/tag/tag.interface';

@Component({
  selector: 'rappider-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class RappiderProductComponent {
  /* image url for background */
  @Input() image: ImageComponentConfig;
  /* tag */
  @Input() tag?: Tag;
  /* product title can take innerHTML*/
  @Input() title: HeadingComponentConfig;
  /* product content can take inner html */
  @Input() content: string;
  /* button */
  @Input() button: ButtonComponentConfig;

  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
