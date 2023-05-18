import { IconComponentConfig } from '../icon';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
} from '../shared';
import { AvatarShape } from './avatar-shape.enum';
import { AvatarSize } from './avatar-size.enum';

export interface AvatarComponentConfig {
  iconName?: string;
  icon?: IconComponentConfig;
  text?: string;
  shape?: AvatarShape;
  imageUrl?: string;
  altText?: string;
  cssStyle?: string;
  size?: AvatarSize;
  description?: string;
  borderSettings?: BorderConfig;
  sizeSettings?: SizeConfig;
  colorSettings?: ColorConfig;
  boxShadowSettings?: BoxShadowConfig;
  paddingSettings?: SpacingConfig;
  marginSettings?: SpacingConfig;
}
