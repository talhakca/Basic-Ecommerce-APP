import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { ImageComponentConfig } from '../image/image-component-config.interface';
import { CardStatus } from './card-status.enum';

export interface ProfileCardTwoComponentConfig {
  profilePhoto?: ImageComponentConfig;
  title?: HeadingComponentConfig;
  cardStatus?: CardStatus;
  content?: string;
  icon?: IconComponentConfig;
  iconBadgeCount?: number;
}
