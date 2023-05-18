import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { TextboxComponentConfig } from '../../utils/textbox/textbox-component-config.interface';

@Component({
  selector: 'rappider-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderInputGroupComponent),
      multi: true,
    },
  ],
})
export class RappiderInputGroupComponent implements ControlValueAccessor {
  @Input() prefixIcon: IconComponentConfig;
  @Input() suffixIcon: IconComponentConfig;
  @Input() prefixButton: ButtonComponentConfig;
  @Input() suffixButton: ButtonComponentConfig;
  @Input() textbox: TextboxComponentConfig;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  _value: string;

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.blur.emit(this.value);
  }
}
