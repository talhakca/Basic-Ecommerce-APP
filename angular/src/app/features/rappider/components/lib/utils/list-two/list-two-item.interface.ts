import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface ListTwoItem {
  /* avatar */
  avatar?: AvatarComponentConfig;
  /* content text */
  textContent?: TextComponentConfig;
  /* comment time */
  commentTime?: TextComponentConfig;
  /* comment text */
  commentText?: TextComponentConfig;
}
