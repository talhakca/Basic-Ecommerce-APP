import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface MessageOneItem {
  avatar?: AvatarComponentConfig;
  time?: TextComponentConfig;
  message?: TextComponentConfig;
  name?: TextComponentConfig;
}
