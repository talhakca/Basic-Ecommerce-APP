import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { ImageComponentConfig } from '../image/image-component-config.interface';

export interface CardThirteenComponentConfig {
  backgroundImage: ImageComponentConfig;
  imageWidth?: string;
  textContent?: string;
  heading?: HeadingComponentConfig;
  additionalContent?: string;
}
