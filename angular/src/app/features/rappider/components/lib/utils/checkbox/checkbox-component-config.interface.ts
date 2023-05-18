import {
  BorderConfig,
  BoxShadowConfig,
  SizeConfig,
  SpacingConfig,
} from '../shared';
import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { CheckboxType } from './checkbox-type.enum';
import { TextComponentConfig } from '../text';

export interface CheckboxComponentConfig {
  text: TextComponentConfig;
  icon: IconComponentConfig;
  disabled?: boolean;
  cssStyle: { [key: string]: any };
  cssClass: string;
  checkboxType: CheckboxType;
  tooltip: string;
  additionalIcon: IconComponentConfig;
  borderSettings: BorderConfig;
  customSizeSettings: SizeConfig;
  shadowSettings: BoxShadowConfig;
  paddingSettings: SpacingConfig;
  marginSettings: SpacingConfig;
}
