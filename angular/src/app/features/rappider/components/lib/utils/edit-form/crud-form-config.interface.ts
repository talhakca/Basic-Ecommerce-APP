import { CrudFormConfigInputChangeReaction } from './crud-form-config-input-change-reaction.enum';
import { CrudFormConfigItemSettings } from './crud-form-config-item-settings.interface';
import { CrudFormConfigSubmitButton } from './crud-form-config-submit-button.interface';
import { CrudFormConfigValidators } from './crud-form-config-validators.interface';
import { CrudFormItem } from './crud-form-item.interface';
import { CrudFormValueEmitMode } from './crud-form-value-emit-mode.enum';
import { FormLayout } from './form-layout.enum';

export interface CrudFormConfig {
  /* Validators for form group */
  validators?: CrudFormConfigValidators[];
  /* Items of the form */
  items: CrudFormItem[];
  /* Item settings */
  itemSettings?: CrudFormConfigItemSettings;
  /* Form layout type */
  formLayout?: FormLayout;
  /* Submit button settings */
  submitButton?: CrudFormConfigSubmitButton;
  /* Reaction after input will be changed */
  inputChangeReaction?: CrudFormConfigInputChangeReaction;
  /* whether to return all form values or not */
  formValueEmitMode?: CrudFormValueEmitMode;
}
