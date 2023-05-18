import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface WeatherConditionContent {
  icon?: IconComponentConfig;
  label?: TextComponentConfig;
  additionalText?: TextComponentConfig;
}
