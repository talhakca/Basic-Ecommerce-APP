import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { ButtonSize } from '../button/button-size.enum';

export interface ButtonGroupComponentConfig {
  buttons?: ButtonComponentConfig[];
  buttonSize?: ButtonSize;
}
