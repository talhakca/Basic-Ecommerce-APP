import { Component, Input } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-card-eight',
  templateUrl: './card-eight.component.html',
  styleUrls: ['./card-eight.component.scss'],
})
export class RappiderCardEightComponent {
  /* button  */
  @Input() button: ButtonComponentConfig;
  /* icon */
  @Input() icon: IconComponentConfig;
  /* description  */
  @Input() description: TextComponentConfig;
  /* additional content */
  @Input() additionalContent: TextComponentConfig;
  /* text input */
  @Input() text: TextComponentConfig;
  /* heading */
  @Input() heading: HeadingComponentConfig;
}
