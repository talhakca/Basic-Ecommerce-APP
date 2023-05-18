import { NgZorroIconTheme } from '../icon/ng-zorro-icon-theme.enum';
import { RadioGroupOptions } from '../radio-group/radio-group-options.interface';

export const ngZorroIconThemeOptionsConfig: RadioGroupOptions[] = [
  {
    value: NgZorroIconTheme.Outline,
    label: 'Outline',
  },
  {
    value: NgZorroIconTheme.Fill,
    label: 'Fill',
  },
  {
    value: NgZorroIconTheme.TwoTone,
    label: 'Two Tone',
  },
];
