import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { AdditionalSubTitle } from './additional-sub-title.interface';
import { CardButton } from './card-button.interface';

export interface CardListItem {
  avatar?: string;
  title?: HeadingComponentConfig;
  subTitle?: HeadingComponentConfig;
  date?: Date;
  additionalSubTitles?: AdditionalSubTitle[];
  data?: any;
  buttons?: CardButton[];
}
