import { ImageComponentConfig } from '../image/image-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { Tag } from '../tag/tag.interface';

export interface ProductOneComponentConfig {
  productImage?: ImageComponentConfig;
  tag?: Tag;
  rate?: number;
  title?: HeadingComponentConfig;
  additionalTitle?: HeadingComponentConfig;
  currency?: string;
  finalPrice?: number;
  price?: number;
}
