import { CheckboxType } from '../checkbox';
import {
  CheckboxListComponentConfig,
  CheckboxListDirection,
} from '../checkbox-list';
import { NgZorroIconTheme } from '../icon/ng-zorro-icon-theme.enum';

export const ngZorroIconTypeButtonsConfig: CheckboxListComponentConfig = {
  options: [
    {
      value: NgZorroIconTheme.Outline,
      key: {
        text: NgZorroIconTheme.Outline,
      },
      checkboxType: CheckboxType.Button,
    },
    {
      value: NgZorroIconTheme.Fill,
      key: {
        text: NgZorroIconTheme.Fill,
      },
      checkboxType: CheckboxType.Button,
    },
    {
      value: NgZorroIconTheme.TwoTone,
      key: {
        text: NgZorroIconTheme.TwoTone,
      },
      checkboxType: CheckboxType.Button,
    },
  ],
  direction: CheckboxListDirection.Row,
};
