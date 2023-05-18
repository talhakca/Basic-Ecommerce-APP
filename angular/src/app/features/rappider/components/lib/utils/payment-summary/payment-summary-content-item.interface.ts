import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface PaymentSummaryContentItem {
  icon?: IconComponentConfig;
  text?: TextComponentConfig;
  predefinedText?: TextComponentConfig;
  button?: ButtonComponentConfig;
}
