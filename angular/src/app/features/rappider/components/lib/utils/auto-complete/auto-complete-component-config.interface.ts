import { AutocompleteDataSource } from 'ng-zorro-antd/auto-complete';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../shared';

export interface AutoComponentConfig {
  backfill?: boolean;
  dataSource?: AutocompleteDataSource;
  defaultActiveFirstOption?: boolean;
  width?: number;
  overlayClassName?: string;
  overlayStyle?: object;
  value?: any;
  placeholder?: string;
  borderSettings?: BorderConfig;
  sizeSettings?: SizeConfig;
  colorSettings?: ColorConfig;
  boxShadowSettings?: BoxShadowConfig;
  paddingSettings?: SpacingConfig;
  marginSettings?: SpacingConfig;
  typographySettings?: TypographyConfig;
}
