import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { CheckboxListDirection } from './checkbox-list-direction.enum';
import { CheckboxList } from './checkbox-list.interface';

export interface CheckboxListComponentConfig {
  direction?: CheckboxListDirection;
  header?: HeadingComponentConfig;
  options?: CheckboxList[];
  button?: ButtonComponentConfig;
}
