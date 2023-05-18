import {
  BorderConfig,
  BoxShadowConfig,
  SizeConfig,
  SpacingConfig,
} from '../shared';

export interface ImageComponentConfig {
  source: string;
  alternateText?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  fallback?: string;
  disablePreview?: boolean;
  borderSettings?: BorderConfig;
  marginSettings?: SpacingConfig;
  paddingSettings?: SpacingConfig;
  shadowSettings?: BoxShadowConfig;
  customSizeSettings?: SizeConfig;
}
