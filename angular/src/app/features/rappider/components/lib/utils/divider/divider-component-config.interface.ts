import { DividerOrientation } from './divider-orientation.enum';
import { DividerType } from './divider-type.enum';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../shared';
import { TextComponentConfig } from '../text';

export interface DividerComponentConfig {
  dashed?: boolean;
  type?: DividerType;
  text?: TextComponentConfig;
  textPlacement?: DividerOrientation;
  borderSettings?: BorderConfig;
  marginSettings?: SpacingConfig;
  paddingSettings?: SpacingConfig;
  shadowSettings?: BoxShadowConfig;
  customSizeSettings?: SizeConfig;
}
