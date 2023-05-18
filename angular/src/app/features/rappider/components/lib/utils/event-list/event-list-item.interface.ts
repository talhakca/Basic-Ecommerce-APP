import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface EventListItem {
  avatar: AvatarComponentConfig;
  title: HeadingComponentConfig;
  subtitle: HeadingComponentConfig;
  description: TextComponentConfig;
}
