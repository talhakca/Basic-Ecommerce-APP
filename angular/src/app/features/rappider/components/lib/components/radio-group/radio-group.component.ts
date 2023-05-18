import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  RadioGroupButtonStyle,
  RadioGroupDirection,
  RadioGroupOptions,
  RadioGroupSize,
} from '../../utils';

@Component({
  selector: 'rappider-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderRadioGroupComponent),
      multi: true,
    },
  ],
})
export class RappiderRadioGroupComponent
  implements OnInit, OnChanges, ControlValueAccessor
{
  @Input() options: RadioGroupOptions[];
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() invalidConfigText: string;
  @Input() size: RadioGroupSize;
  @Input() disabled: boolean;
  @Input() title: string;
  @Input() buttonStyle: RadioGroupButtonStyle;
  @Input() direction: RadioGroupDirection;

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  _value: string;
  isValid: boolean;

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  ngOnInit(): void {
    this.initDefaults();
    this.checkValidity();
  }

  ngOnChanges(): void {
    this.initDefaults();
  }

  initDefaults() {
    if (this.disabled == null) {
      this.disabled = false;
    }
    if (!this.buttonStyle) {
      this.buttonStyle = RadioGroupButtonStyle.Outline;
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onValueChange(event) {
    this.blur.emit(event);
  }

  checkValidity() {
    this.isValid = Array.isArray(this.options);
  }

  setInvalidConfigText() {
    return (
      this.invalidConfigText ||
      'COMPONENT_LIBRARY_MODULE.INPUTS_MODULE.INVALID_CONFIG'
    );
  }

  setDirection() {
    if (this.direction === RadioGroupDirection.Vertical) {
      return { 'flex-direction': 'column' };
    } else {
      return { 'flex-direction': 'row' };
    }
  }
}
