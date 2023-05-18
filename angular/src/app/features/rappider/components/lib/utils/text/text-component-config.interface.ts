import { ColorConfig } from '../shared/color/color.interface';
import { TypographyConfig } from '../shared/typography/typography.interface';
import { TextMode } from './text-mode.enum';

export interface TextComponentConfig {
  // for html mode
  content?: string;
  // for simple text mode
  text?: string;
  textMode?: TextMode;
  typography?: TypographyConfig;
  colorSettings?: ColorConfig;
}
