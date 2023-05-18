import { Validators } from '@angular/forms';
import {
  ActionBehavior,
  ButtonType,
  CrudFormButtonItem,
  CrudFormConfig,
  CrudFormTextBoxItem,
  CrudViewFormItemType,
  FormLayout,
  InputSize,
  TextBoxType,
} from '../../../../rappider/components/lib/utils';
import { pathDefinitions } from '../../../definitions';

export const LOGIN_CONFIG: CrudFormConfig = {
  items: [
    <CrudFormTextBoxItem>{
      title: 'Username',
      fieldName: 'username',
      placeholder: 'Username',
      type: CrudViewFormItemType.TextBox,
      required: true,
      index: 1,
      validators: [
        {
          type: Validators.required,
          errorKey: 'required',
          errorMessage: 'Username is required.',
        },
      ],
      size: InputSize.Large,
    },
    <CrudFormTextBoxItem>{
      title: 'Password',
      fieldName: 'password',
      placeholder: 'Password',
      type: CrudViewFormItemType.TextBox,
      textType: TextBoxType.Password,
      index: 4,
      validators: [
        {
          type: Validators.required,
          errorKey: 'required',
          errorMessage: 'Password is required.',
        },
      ],
      size: InputSize.Large,
    },
    <CrudFormButtonItem>{
      text: 'Forgot Password',
      type: CrudViewFormItemType.Button,
      behavior: ActionBehavior.Route,
      redirectUrl: pathDefinitions.auth.forgotPasswordPath,
      buttonType: ButtonType.Link,
      index: 5,
      cssStyle: {
        padding: 0,
        float: 'right',
      },
    },
  ],
  itemSettings: {
    inputComponentSize: {
      xs: 24,
    },
    labelComponentSize: {
      xs: 24,
    },
  },
  submitButton: {
    text: 'Login',
    size: 'large',
  },
  formLayout: FormLayout.Vertical,
};

export const LOGIN_FEEDBACK_CONFIG = {
  title: 'Logging In',
  icon: 'fas fa-spinner fa-spin',
};
