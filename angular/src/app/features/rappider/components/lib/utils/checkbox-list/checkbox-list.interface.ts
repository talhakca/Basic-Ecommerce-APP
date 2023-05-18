import { CheckboxType } from '../checkbox/checkbox-type.enum';
import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { TextComponentConfig } from '../text';

export interface CheckboxList {
  value: string;
  key?: TextComponentConfig;
  cssStyle?: { [key: string]: any };
  cssClass?: string;
  disabled?: boolean;
  checkboxType?: CheckboxType;
  icon?: IconComponentConfig;
  tooltip?: string;
  additionalIcon?: IconComponentConfig;
}
