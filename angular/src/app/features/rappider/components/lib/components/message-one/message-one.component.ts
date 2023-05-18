import { Component, Input } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { MessageOneItem } from '../../utils/message-one/message-one-item.interface';

@Component({
  selector: 'rappider-message-one',
  templateUrl: './message-one.component.html',
  styleUrls: ['./message-one.component.scss'],
})
export class RappiderMessageOneComponent {
  @Input() data: MessageOneItem[];
  @Input() heading: HeadingComponentConfig;
  @Input() button: ButtonComponentConfig;
}
