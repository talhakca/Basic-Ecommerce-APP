import { Validators } from '@angular/forms';
import {
  CrudFormConfig,
  CrudViewFormItemType,
  CrudFormTextBoxItem,
  TextBoxType,
  FormLayout,
  CrudFormInputValidatorInfoItem,
  InputSize,
} from '../../../../rappider/components/lib/utils';
import {
  PASSWORD_REGEX,
  US_PHONE_MASK,
  US_PHONE_REGEX,
  SPECIAL_CHARACTER_REGEX,
} from '../../../definitions';

export const REGISTER_CONFIG: CrudFormConfig = {
  items: [
    <CrudFormTextBoxItem>{
      title: 'First Name',
      fieldName: 'firstName',
      type: CrudViewFormItemType.TextBox,
      index: 1,
      size: InputSize.Large,
      placeholder: 'First Name',
      validators: [
        {
          type: Validators.required,
          errorKey: 'required',
          errorMessage: 'This field is required.',
        },
      ],
    },
    <CrudFormTextBoxItem>{
      title: 'Last Name',
      fieldName: 'lastName',
      index: 2,
      type: CrudViewFormItemType.TextBox,
      size: InputSize.Large,
      placeholder: 'Last Name',
      validators: [
        {
          type: Validators.required,
          errorKey: 'required',
          errorMessage: 'This field is required.',
        },
      ],
    },
    <CrudFormTextBoxItem>{
      title: 'Password',
      fieldName: 'password',
      type: CrudViewFormItemType.TextBox,
      textType: TextBoxType.Password,
      index: 4,
      size: InputSize.Large,
      placeholder: 'Password',
      validators: [
        {
          type: Validators.required,
          errorKey: 'required',
          errorMessage: 'This field is required.',
        },
        {
          type: Validators.pattern(PASSWORD_REGEX),
          errorKey: 'pattern',
        },
      ],
    },
    <CrudFormInputValidatorInfoItem>{
      relatedFieldName: 'password',
      type: CrudViewFormItemType.InputValidatorInfo,
      index: 5,
      patternInfos: [
        {
          pattern: /[1-9]/,
          message: 'Password must have at least one digit character.',
        },
        {
          pattern: /[A-Z]/,
          message: 'Password must have at least one upper case character.',
        },
        {
          pattern: SPECIAL_CHARACTER_REGEX,
          message: 'Password must have at least one special character.',
        },
        {
          pattern: /.{8,}/,
          message: 'Password must be at least eight character.',
        },
      ],
    },
    <CrudFormTextBoxItem>{
      title: 'Confirm Password',
      fieldName: 'confirmPassword',
      type: CrudViewFormItemType.TextBox,
      textType: TextBoxType.Password,
      index: 6,
      size: InputSize.Large,
      placeholder: 'Confirm Password',
      validators: [
        {
          type: Validators.required,
          errorKey: 'required',
          errorMessage: 'This field is required.',
        },
        {
          errorKey: 'mustMatch',
          errorMessage: 'This field must be same with password area.',
        },
      ],
    },
    <CrudFormTextBoxItem>{
      text: `I accept the terms.`,
      title: null,
      fieldName: 'privacyPolicy',
      type: CrudViewFormItemType.CheckBox,
      showRequiredSign: false,
      validators: [
        {
          type: Validators.requiredTrue,
          errorKey: 'required',
          errorMessage: 'You should accept terms to be registered.',
        },
      ],
    },
  ],
  validators: [
    {
      name: 'MustMatch',
      validatorKey: 'mustMatch',
      params: {
        field1: 'password',
        field2: 'confirmPassword',
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
    text: 'Sign Up',
    size: 'large',
  },
  formLayout: FormLayout.Vertical,
};

export const EMAIL_REGISTER_CONFIG = <CrudFormTextBoxItem>{
  title: 'Email',
  fieldName: 'email',
  type: CrudViewFormItemType.TextBox,
  required: true,
  index: 3,
  textType: TextBoxType.Email,
  size: InputSize.Large,
  placeholder: 'Email',
  validators: [
    {
      type: Validators.required,
      errorKey: 'required',
      errorMessage: 'This field is required.',
    },
    {
      type: Validators.email,
      errorKey: 'email',
      errorMessage: 'Please enter a valid email.',
    },
  ],
};
