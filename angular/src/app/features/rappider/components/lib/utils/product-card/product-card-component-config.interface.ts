import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { ParagraphComponentConfig } from '../paragraph';
import { SelectComponentConfig } from '../select/select-component-config.interface';
import { Tag } from '../tag/tag.interface';
import { TextComponentConfig } from '../text';
import { ProductCardOptionsConfig } from './product-card-options-config.interface';

export interface ProductCardComponentConfig {
  /* tag */
  tag?: Tag;
  /* item title */
  title?: HeadingComponentConfig;
  /* item description */
  itemDescription?: ParagraphComponentConfig;
  /* item rating */
  rate?: number;
  /* price label */
  price?: string;
  /* additional options for product */
  optionItems?: ProductCardOptionsConfig[];
  /* additional content for product */
  additionalButtons?: ButtonComponentConfig[];
  /* text area label */
  description?: string;
  /* select interface */
  select?: SelectComponentConfig;
  /* main button */
  button?: ButtonComponentConfig;
}
