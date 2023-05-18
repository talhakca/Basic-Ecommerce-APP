import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-card-three',
  templateUrl: './card-three.component.html',
  styleUrls: ['./card-three.component.scss'],
})
export class RappiderCardThreeComponent {
  /* data to emit */
  @Input() data: any;
  /**
   * image's title
   *
   * @type {Heading}
   * @memberof RappiderPaymentDetailsComponent
   */
  @Input() title: HeadingComponentConfig;
  /**
   * image's subtitle
   *
   * @type {Heading}
   * @memberof RappiderPaymentDetailsComponent
   */
  @Input() subtitle: HeadingComponentConfig;
  /**
   * additional information of image
   *
   * @type {string[]}
   * @memberof RappiderPaymentDetailsComponent
   */
  @Input() additionalContents: TextComponentConfig[];
  /**
   * title's & image's button
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderPaymentDetailsComponent
   */
  @Input() button: ButtonComponentConfig;
  /**
   * card's image
   *
   * @type {ImageComponentConfig}
   * @memberof RappiderPaymentDetailsComponent
   */
  @Input() image: ImageComponentConfig;
  /**
   * button click emit
   *
   * @memberof RappiderPaymentDetailsComponent
   */
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit(this.data);
  }
}
