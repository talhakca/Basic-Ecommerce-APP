import { ImageComponentConfig } from '../image/image-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface ShoppingCartItem {
  title?: string;
  image?: ImageComponentConfig;
  subtitle?: string;
  additionalContents?: string[];
  price?: TextComponentConfig;
  total?: TextComponentConfig;
  step?: number;
  max?: number;
  min?: number;
  value?: number;
}
