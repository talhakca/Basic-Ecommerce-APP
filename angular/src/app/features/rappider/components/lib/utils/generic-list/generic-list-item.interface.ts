import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface GenericListItem {
  imageUrl?: string;
  title?: HeadingComponentConfig;
  subTitle?: HeadingComponentConfig;
  date?: Date | number | string;
  description?: TextComponentConfig;
  data?: any;
}
