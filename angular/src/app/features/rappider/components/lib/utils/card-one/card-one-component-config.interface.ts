import { AvatarPlacement } from '../../utils/card-one/card-one-avatar-placement.enum';
import { AvatarComponentConfig } from '../avatar';
import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { IconComponentConfig } from '../icon';
import { ImageComponentConfig } from '../image/image-component-config.interface';
import { TagComponentConfig } from '../tag';
import { Tag } from '../tag/tag.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';
import { CardOneImagePosition } from './card-one-image-position.enum';

export interface CardOneComponentConfig {
  data?: any;
  image?: ImageComponentConfig;
  imageTags?: TagComponentConfig[];
  imageButtons?: ButtonComponentConfig[];
  imagePosition?: CardOneImagePosition;
  rate?: number;
  titles?: HeadingComponentConfig[];
  currency?: string;
  finalPrice?: number;
  price?: number;
  additionalTags?: TagComponentConfig[];
  additionalButtons?: ButtonComponentConfig[];
  descriptions?: TextComponentConfig[];
  avatar?: AvatarComponentConfig;
  avatarButton?: ButtonComponentConfig;
  avatarPlacement?: AvatarPlacement;
  isSelected?: boolean;
  selectedCardIcon?: IconComponentConfig;
}
