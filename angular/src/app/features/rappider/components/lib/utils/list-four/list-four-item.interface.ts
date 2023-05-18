import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface ListFourItem {
  /* avatar */
  avatar: AvatarComponentConfig;
  /* content text */
  text: TextComponentConfig;
  /* time text */
  timeContent: TextComponentConfig;
  /* comment text */
  commentText: TextComponentConfig;
  /* directive for navigating from the time link to the target place */
  timeRedirectUrl: string;
  /* directive for navigating from the thumbs down link to the target place */
  thumbsDownRedirectUrl: string;
  /* directive for navigating from the thumbs up link to the target place */
  thumbsUpRedirectUrl: string;
}
