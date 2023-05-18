import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { IconBlockMode } from '../icon-block/icon-block-mode.enum';
import { TextComponentConfig } from '../text/text-component-config.interface';
export interface IconBlockComponentConfig {
  avatar: AvatarComponentConfig;
  title: HeadingComponentConfig;
  content: TextComponentConfig;
  mode: IconBlockMode;
}
