import { Component, Input } from '@angular/core';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';
import { AvatarShape } from '../../utils/avatar/avatar-shape.enum';
import { AvatarSize } from '../../utils/avatar/avatar-size.enum';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
} from '../../utils/shared';

@Component({
  selector: 'rappider-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class RappiderAvatarComponent {
  /* avatar text */
  @Input() text: string;
  /**
   * iconName is deprecated use icon input instead
   *
   * @type {string}
   * @memberof RappiderAvatarComponent
   */
  @Input() iconName: string;
  /* displayed icon's name */
  @Input() icon: IconComponentConfig;
  /* avatar shape */
  @Input() shape: AvatarShape;
  /* avatar image url */
  @Input() imageUrl: string;
  /* alternate text */
  @Input() altText: string;
  /* css style eg. backgroundColor */
  @Input() cssStyle: string;
  /* avatar size */
  @Input() size: AvatarSize | number;
  /* avatar description */
  @Input() tooltipText?: string;
  @Input() description: string;
  @Input() borderSettings: BorderConfig;
  @Input() sizeSettings: SizeConfig;
  @Input() colorSettings: ColorConfig;
  @Input() boxShadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;
}
