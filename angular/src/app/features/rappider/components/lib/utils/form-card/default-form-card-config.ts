import {
  CrudViewFormItemType,
  FormLayout,
  CrudFormConfigInputChangeReaction,
} from '..';
import { CrudFormConfig } from '../edit-form';

export const DEFAULT_FORM_CARD_CONFIG: CrudFormConfig = {
  items: [
    {
      type: CrudViewFormItemType.TextBox,
      title: ' Your E-Mail Address',
      placeholder: 'YOUR E-MAIL ADDRESS',
      description:
        '-----You must enter your current e-mail address in order to change your password-----',
      labelIcon: {
        name: 'fas fa-user',
      },
      showRequiredSign: true,
      showColonSign: true,
      section: ' ',
      hint: 'Required Field',
    },
  ],
  submitButton: {
    text: 'GET NEW PASSWORD',
    size: 'large',
  },
  formLayout: FormLayout.Vertical,
  itemSettings: {
    labelComponentSize: { xxl: 0 },
    inputComponentSize: { xxl: 0 },
  },
  inputChangeReaction: CrudFormConfigInputChangeReaction.Blur,
};
