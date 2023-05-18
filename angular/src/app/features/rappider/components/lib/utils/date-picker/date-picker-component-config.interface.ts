import { DatePickerDateMode } from './date-picker-date-mode.enum';
import {
  BorderConfig,
  BoxShadowConfig,
  SizeConfig,
  SpacingConfig,
} from '../shared';
import { TextComponentConfig } from '../text/text-component-config.interface';
import { DateFormat } from './date-picker-date-format.enum';
import { DateSplitter } from './date-picker-splitter.enum';

export interface DatePickerComponentConfig {
  minSelectableDate: Date;
  maxSelectableDate: Date;
  cssStyle?: { [key: string]: any };
  cssClass?: string;
  placeholder?: string;
  dateMode?: DatePickerDateMode;
  boxBorder?: boolean;
  borderSettings?: BorderConfig;
  marginSettings?: SpacingConfig;
  paddingSettings?: SpacingConfig;
  shadowSettings?: BoxShadowConfig;
  text?: TextComponentConfig;
  customSizeSettings?: SizeConfig;
  dateFormat?: DateFormat;
  splitter?: DateSplitter;
}
