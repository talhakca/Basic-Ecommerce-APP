import { ButtonComponentConfig } from '../button';
import { HeadingComponentConfig } from '../heading';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../shared';
import { TextComponentConfig } from '../text';
import { ActionConfigPlacement } from './action-config-placement.enum';
import { AlertTypes } from './alert-types';

export interface AlertConfig {
  data?: any;
  type: AlertTypes;
  title?: HeadingComponentConfig;
  description?: TextComponentConfig;
  showIcon: boolean;
  closeable: boolean;
  actionConfig?: ButtonComponentConfig;
  actionConfigPlacement?: ActionConfigPlacement;
  borderSettings?: BorderConfig;
  sizeSettings?: SizeConfig;
  colorSettings?: ColorConfig;
  boxShadowSettings?: BoxShadowConfig;
  paddingSettings?: SpacingConfig;
  marginSettings?: SpacingConfig;
}
