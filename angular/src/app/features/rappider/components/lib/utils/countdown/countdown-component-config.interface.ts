import { HeadingComponentConfig } from '../heading';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
} from '../shared';
import { TextComponentConfig } from '../text';

export interface CountdownComponentConfig {
  deadline?: string | number;
  title?: HeadingComponentConfig;
  format?: string;
  prefix?: string;
  borderSettings?: BorderConfig;
  marginSettings?: SpacingConfig;
  paddingSettings?: SpacingConfig;
  shadowSettings?: BoxShadowConfig;
  customSizeSettings?: SizeConfig;
  text?: TextComponentConfig;
}
