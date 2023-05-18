import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  AvatarListWithTagComponentConfig,
  ButtonComponentConfig,
  HeadingComponentConfig,
} from '../../utils';

@Component({
  selector: 'rappider-avatar-list-with-tag',
  templateUrl: './avatar-list-with-tag.component.html',
  styleUrls: ['./avatar-list-with-tag.component.scss'],
})
export class RappiderAvatarListWithTagComponent {
  /* card's title */
  @Input() cardTitle: HeadingComponentConfig;
  /* list item: avatarUrl, title, subtitle, tagText */
  @Input() listItem: AvatarListWithTagComponentConfig[];
  /* button text */
  @Input() button: ButtonComponentConfig;

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
