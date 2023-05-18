import { SwitchSize } from '../switch';
import { CrudFormItem } from './crud-form-item.interface';

export interface CrudFormSwitchItem extends CrudFormItem {
  disabled?: boolean;
  loading?: boolean;
  size?: SwitchSize;
}
