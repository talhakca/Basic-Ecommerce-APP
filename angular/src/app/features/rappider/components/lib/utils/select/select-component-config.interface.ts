import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { SelectableOption } from '../form-utils/selectable-option.type';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  InputSize,
  SizeConfig,
  SpacingConfig,
} from '../shared';
import { GrouppedOption } from './groupped-option.interface';
import { SelectSettings } from './select-settings.interface';

export interface SelectComponentConfig {
  options?: SelectableOption[];
  grouppedOptions?: GrouppedOption[];
  settings?: SelectSettings;
  placeholder?: string;
  cssStyle?: { [key: string]: any };
  cssClass?: string;
  invalidConfigText?: string;
  disabled?: boolean;
  loading?: boolean;
  buttons?: ButtonComponentConfig[];
  dropdownMatchSelectWidth?: boolean;
  dropdownClassName?: string;
  borderSettings?: BorderConfig;
  sizeSettings?: SizeConfig;
  colorSettings?: ColorConfig;
  boxShadowSettings?: BoxShadowConfig;
  paddingSettings?: SpacingConfig;
  marginSettings?: SpacingConfig;
  size?: InputSize;
}
