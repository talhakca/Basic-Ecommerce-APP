import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectableOption } from '../../utils/form-utils/selectable-option.type';
import { TagInputSettings } from '../../utils/tag-input/tag-input-settings.interface';

@Component({
  selector: 'rappider-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderTagInputComponent),
      multi: true,
    },
  ],
})
export class RappiderTagInputComponent implements ControlValueAccessor {
  /* TODO: cursor doesnt show while typing */
  /* Follow the issue: https://github.com/NG-ZORRO/ng-zorro-antd/issues/5704 */

  @Input() options: SelectableOption[];
  @Input() settings: TagInputSettings;
  @Input() placeholder: string;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  _value: any;

  get value() {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
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

  onBlur() {
    this.blur.emit(this.value);
  }
}
