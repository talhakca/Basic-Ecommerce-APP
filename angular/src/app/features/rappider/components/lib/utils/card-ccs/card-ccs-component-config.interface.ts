import { ButtonComponentConfig } from '../button';
import { HeadingComponentConfig } from '../heading';
import { ImageComponentConfig } from '../image';
import { TextComponentConfig } from '../text';

export interface CardCcsComponentConfig {
  /* data that will be passed and emitted by the item click */
  data?: any;
  /* title */
  title?: HeadingComponentConfig;
  /* subtitles as array */
  subtitles?: HeadingComponentConfig[];
  /* description */
  description?: TextComponentConfig;
  /* image as cover picture, not the backgound cover but above the title */
  image?: ImageComponentConfig;
  /* first action button */
  firstActionButton?: ButtonComponentConfig;
  /* second action button */
  secondActionButton?: ButtonComponentConfig;
  /* third action button */
  thirdActionButton?: ButtonComponentConfig;
}
