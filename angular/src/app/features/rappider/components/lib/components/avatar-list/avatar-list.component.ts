import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvatarListItem } from '../../utils/avatar-list/avatar-list-item.interface';
import { ButtonComponentConfig } from '../../utils/button';
import { HeadingComponentConfig } from '../../utils/heading';

@Component({
  selector: 'rappider-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.scss'],
})
export class RappiderAvatarListComponent {
  /**
   *  avatar list items
   *
   * @type {AvatarListItem[]}
   * @memberof RappiderAvatarListComponent
   */
  @Input() items: AvatarListItem[];
  /**
   * card title
   *
   * @type {HeadingComponentConfig}
   * @memberof RappiderAvatarListComponent
   */
  @Input() title: HeadingComponentConfig;
  /**
   * card button
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderAvatarListComponent
   */
  @Input() button: ButtonComponentConfig;

  /**
   * card button click event emitter
   *
   * @memberof RappiderAvatarListComponent
   */
  @Output() buttonClick = new EventEmitter();
  /**
   * add button click event emitter
   *
   * @memberof RappiderAvatarListComponent
   */
  @Output() avatarClick = new EventEmitter<AvatarListItem>();

  onButtonClick() {
    this.buttonClick.emit();
  }

  onAvatarClick(clickedAvatar: AvatarListItem) {
    this.avatarClick.emit(clickedAvatar);
  }
}
