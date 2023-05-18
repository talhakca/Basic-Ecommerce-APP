import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
} from '../shared';
import { TextComponentConfig } from '../text';

export interface TimePickerComponentConfig {
  borderSettings: BorderConfig;
  customSizeSettings: SizeConfig;
  shadowSettings: BoxShadowConfig;
  paddingSettings: SpacingConfig;
  marginSettings: SpacingConfig;
  text: TextComponentConfig;
}
