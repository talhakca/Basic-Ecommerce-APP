import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  ButtonComponentConfig,
  HeadingComponentConfig,
  ImageComponentConfig,
  TextComponentConfig,
} from '../../utils';

@Component({
  selector: 'rappider-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class RappiderCardComponent {
  /**
   *Card's avatar
   *
   * @type {AvatarComponentConfig}
   * @memberof RappiderCardComponent
   */
  @Input() image: ImageComponentConfig;
  /**
   *Card's title
   *
   * @type {HeadingComponentConfig}
   * @memberof RappiderCardComponent
   */
  @Input() title: HeadingComponentConfig;
  /**
   *Card's subtitle
   *
   * @type {HeadingComponentConfig}
   * @memberof RappiderCardComponent
   */
  @Input() subtitle: HeadingComponentConfig;
  /**
   *Additional information of title/subtitle
   *
   * @type {string[]}
   * @memberof RappiderCardComponent
   */
  @Input() additionalContents: TextComponentConfig[];
  /**
   *Card's buttons
   *
   * @type {ButtonComponentConfig[]}
   * @memberof RappiderCardComponent
   */
  @Input() buttons: ButtonComponentConfig[];
  /**
   *Button's click emit
   *
   * @memberof RappiderCardComponent
   */
  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
