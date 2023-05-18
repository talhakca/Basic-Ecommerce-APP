import { CrudFormItemValidator } from '../edit-form/crud-form-item-validator.interface';
import { SelectComponentConfig } from '../select/select-component-config.interface';

export interface RowSelectColumn {
  fieldName: string;
  unique?: boolean;
  validators?: CrudFormItemValidator[];
  visible?: boolean;
  selectConfig?: SelectComponentConfig;
}
