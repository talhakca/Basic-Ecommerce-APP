import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tag } from '../../utils/tag/tag.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { IconBlockComponentConfig } from '../../utils/icon-block/icon-block-component-config.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { IconAndMenuList } from '../../utils/icon-and-menu-list/icon-and-menu-list.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';
import { DividerComponentConfig } from '../../utils/divider';

@Component({
  selector: 'rappider-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class RappiderProfileCardComponent {
  /**
   *Displays the tag of the card
   *
   * @type {Tag}
   * @memberof RappiderProfileCardComponent
   */
  @Input() profileTag: Tag;
  /**
   *Displays the icon of the card
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderProfileCardComponent
   */
  @Input() iconButton: ButtonComponentConfig;
  /**
   *Displays the avatar of the card
   *
   * @type {IconBlockComponentConfig}
   * @memberof RappiderProfileCardComponent
   */
  @Input() profilePicture: IconBlockComponentConfig;
  /**
   *Displays the title of the card
   *
   * @type {HeadingComponentConfig}
   * @memberof RappiderProfileCardComponent
   */
  @Input() profileTitle: HeadingComponentConfig;
  /**
   *Displays the additional information of the title
   *
   * @type {string}
   * @memberof RappiderProfileCardComponent
   */
  @Input() additionalContent: TextComponentConfig;
  /**
   *Displays the multiple tags of the card
   *
   * @type {Tag[]}
   * @memberof RappiderProfileCardComponent
   */
  @Input() tags: Tag[];
  /**
   *Displays information with icons
   *
   * @type {IconAndMenuList}
   * @memberof RappiderProfileCardComponent
   */
  @Input() icons: IconAndMenuList;
  /**
   *Displays the images of the card
   *
   * @type {ImageComponentConfig[]}
   * @memberof RappiderProfileCardComponent
   */
  @Input() images: ImageComponentConfig[];
  /**
   *Sets divider between images
   *
   * @type {string}
   * @memberof RappiderProfileCardComponent
   */
  @Input() divider: string;
  @Input() dividerComponentConfig: DividerComponentConfig;
  /**
   *Button click emit
   *
   * @memberof RappiderProfileCardComponent
   */
  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick(iconButton: ButtonComponentConfig) {
    this.buttonClick.emit(iconButton);
  }
}
