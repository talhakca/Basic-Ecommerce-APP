import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { ImageComponentConfig } from '../image/image-component-config.interface';

export interface TitleImageItem {
  image?: ImageComponentConfig;
  description?: HeadingComponentConfig;
  imageRedirectUrl?: string;
}
