import { CrudFormItemValidator } from '../edit-form/crud-form-item-validator.interface';
import { InputTemplateTypeAndFormat } from '../input-template';

export interface RowFormColumn {
  typeAndFormat: InputTemplateTypeAndFormat;
  fieldName: string;
  placeholder?: string;
  unique?: boolean;
  validators?: CrudFormItemValidator[];
  visible?: boolean;
  showCodemirrorForObjectAndArray?: boolean;
  config?: any;
}
