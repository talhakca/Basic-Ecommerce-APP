import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface Panel {
  active?: boolean;
  name: HeadingComponentConfig;
  content: TextComponentConfig;
  disabled?: boolean;
}
