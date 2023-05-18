import { IconComponentConfig } from '../icon/icon-component-config.interface';

export interface SelectableOption {
  key: string;
  value: any;
  icon?: IconComponentConfig;
}

export interface SelectableOptionWithTooltip extends SelectableOption {
  tooltipText?: string;
}
