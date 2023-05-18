import { Component, Input } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar/avatar-component-config.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading';
import { ParagraphComponentConfig } from '../../utils/paragraph/paragraph-component-config.interface';

@Component({
  selector: 'rappider-card-five',
  templateUrl: './card-five.component.html',
  styleUrls: ['./card-five.component.scss'],
})
export class RappiderCardFiveComponent {
  @Input() title: HeadingComponentConfig;
  @Input() additionalContent: ParagraphComponentConfig;
  @Input() buttons: ButtonComponentConfig[];
  @Input() optionalButton: ButtonComponentConfig;
  @Input() avatar: AvatarComponentConfig;
}
