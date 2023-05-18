/* eslint-disable @typescript-eslint/no-explicit-any */
import { DynamicDataForSelectBox } from '../edit-form';
import { CrudFormConfig } from '../edit-form/crud-form-config.interface';

export interface EditFormComponentConfig {
  /* configuration of this component */
  config: CrudFormConfig;
  /* data for default input values */
  data: any;
  /* auto submit&dirty value for form */
  submitted: boolean;
  /* loading status for submit button */
  submitButtonLoading: boolean;
  /* dynamic data for selectbox */
  dynamicDataForSelectBox: DynamicDataForSelectBox[];
}
