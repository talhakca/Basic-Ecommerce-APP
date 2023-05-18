import { ColorConfig, TypographyConfig } from '../shared';

export interface LabelComponentConfig {
  content: string;
  typography?: TypographyConfig;
  colorSettings?: ColorConfig;
}
