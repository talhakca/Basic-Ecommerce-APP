import { SwitchSize } from './switch-size.enum';

export interface SwitchComponentConfig {
  disabled: boolean;
  loading: boolean;
  size: SwitchSize;
  text: string;
  defaultValue?: boolean;
  textPosition?: string;
  tooltipText?: string;
}
