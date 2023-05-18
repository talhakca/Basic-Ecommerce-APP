import {
  BorderConfig,
  BoxShadowConfig,
  SizeConfig,
  SpacingConfig,
} from '../shared';
import { ColorConfig } from '../shared/color/color.interface';
import { TypographyConfig } from '../shared/typography/typography.interface';

export interface ParagraphComponentConfig {
  content?: string;
  typography: TypographyConfig;
  colorSettings?: ColorConfig;

  // alttakiler silinecek
  borderSettings?: BorderConfig;
  customSizeSettings?: SizeConfig;
  customColorSettings?: ColorConfig;
  shadowSettings?: BoxShadowConfig;
  paddingSettings?: SpacingConfig;
  marginSettings?: SpacingConfig;
  typographySettings: TypographyConfig;
}
