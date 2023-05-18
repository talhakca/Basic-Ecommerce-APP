import { SelectableOption } from '../form-utils/selectable-option.type';
import { SelectSettings } from '../select/select-settings.interface';
import { InputSize } from '../shared';
import { CrudFormItem } from './crud-form-item.interface';

export interface CrudFormSelectItem extends CrudFormItem {
  size?: InputSize;
  settings?: SelectSettings;
  options: SelectableOption[];
  invalidConfigText?: string;
  disabled?: boolean;
}
