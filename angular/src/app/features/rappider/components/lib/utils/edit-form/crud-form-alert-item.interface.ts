import { AlertConfig } from '../alert';
import { CrudFormItem } from './crud-form-item.interface';

export interface CrudFormCodeMirrorItem extends CrudFormItem {
  alert?: AlertConfig;
}
