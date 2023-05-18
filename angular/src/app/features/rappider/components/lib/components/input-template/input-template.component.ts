import {
  Component,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CODEMIRROR_JSON_SETTINGS } from '../../utils/codemirror';
import {
  inputSettingsDropdownConfig,
  InputSettingsDropdownOptions,
  InputTemplateTypeAndFormat,
  PropertyFormat,
  PropertyType,
  SupportedFormats,
  SupportedTypes,
} from '../../utils/input-template';

@Component({
  selector: 'rappider-input-template',
  templateUrl: './input-template.component.html',
  styleUrls: ['./input-template.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderInputTemplateComponent),
      multi: true,
    },
  ],
})
export class RappiderInputTemplateComponent
  implements ControlValueAccessor, OnChanges
{
  @Input() typeAndFormat: InputTemplateTypeAndFormat;
  /* flag for whether showing codemirror or textbox for arrays and objects */
  @Input() showCodemirrorForObjectAndArray: boolean;
  @Input() config: any;
  @Input() isInputOptionsVisible = false;

  isTypeAndFormatSupported: boolean;

  _value: any;

  PropertyType = PropertyType;
  PropertyFormat = PropertyFormat;
  SupportedTypes = SupportedTypes;
  CODEMIRROR_JSON_SETTINGS = CODEMIRROR_JSON_SETTINGS;
  inputSettingsDropdownConfig = inputSettingsDropdownConfig;
  InputSettingsDropdownOptions = InputSettingsDropdownOptions;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.typeAndFormat) {
      this.checkIfTypeAndFormatSupported(changes.typeAndFormat.currentValue);
    }
  }

  get value() {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  checkIfTypeAndFormatSupported(typeAndFormat: any) {
    if (typeAndFormat?.format) {
      this.isTypeAndFormatSupported =
        this.SupportedTypes.includes(typeAndFormat?.type) &&
        SupportedFormats.includes(typeAndFormat?.format);
    } else {
      this.isTypeAndFormatSupported = this.SupportedTypes.includes(
        typeAndFormat?.type
      );
    }
  }

  onInputSettingsDropdownItemClick(data) {
    if (data.key === InputSettingsDropdownOptions.SetAsNull) {
      this.value = null;
    }
  }
}
