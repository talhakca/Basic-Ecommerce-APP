import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { HeadingComponentConfig } from '../../utils/heading';
import { ImageComponentConfig } from '../../utils/image';

@Component({
  selector: 'rappider-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss'],
})
export class RappiderGalleryGridComponent {
  /* title */
  @Input() title: HeadingComponentConfig;
  /* sub title */
  @Input() subtitle: HeadingComponentConfig;
  /* image */
  @Input() image: ImageComponentConfig;
  /* button component config */
  @Input() button: ButtonComponentConfig;
  /* css class for section  */
  @Input() cssClass: string;

  /* returns nothing just triggers */
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
