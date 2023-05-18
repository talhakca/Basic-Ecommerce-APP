import { IconComponentConfig } from '../icon/icon-component-config.interface';
import {
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
} from '../shared';
import { BorderConfig } from '../shared/border/border.interface';
import { ButtonColorType } from './button-color-type.enum';
import { IconPlacement } from './button-icon-placement.enum';
import { ButtonShape } from './button-shape.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonType } from './button-type.enum';
import { FormButtonType } from './form-button-type.enum';

export interface ButtonComponentConfig {
  key?: string;
  text?: string;
  type?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
  transparent?: boolean;
  loading?: boolean;
  block?: boolean;
  disabled?: boolean;
  icon?: IconComponentConfig;
  colorType?: ButtonColorType;
  popconfirmTitle?: string;
  emitWithoutPopconfirm?: boolean;
  iconPlacement?: IconPlacement;
  formButtonType?: FormButtonType;
  borderSettings?: BorderConfig;
  marginSettings?: SpacingConfig;
  paddingSettings?: SpacingConfig;
  shadowSettings?: BoxShadowConfig;
  customColorSettings?: ColorConfig;
  customSizeSettings?: SizeConfig;
  tooltipText?: string;
}
