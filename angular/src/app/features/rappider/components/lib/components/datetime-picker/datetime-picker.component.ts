import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerComponentConfig } from '../../utils/date-picker';
import { TimePickerComponentConfig } from '../../utils/time-picker';

@Component({
  selector: 'rappider-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderDatetimePickerComponent),
      multi: true,
    },
  ],
})
export class RappiderDatetimePickerComponent implements ControlValueAccessor {
  /* component value  */
  _value: Date;
  /* temporary time value */
  time: Date;
  /* temporary date value */
  date: Date;

  @Input() minSelectableDate: Date;
  @Input() maxSelectableDate: Date;
  @Input() timePicker: TimePickerComponentConfig;
  @Input() datePicker: DatePickerComponentConfig;

  @Output() blur = new EventEmitter<Date>();
  @Output() valueChange = new EventEmitter<Date>();

  get value() {
    return this._value;
  }

  set value(value: Date) {
    this._value = value;
    this.onChange(this.value);
    this.onTouched();
    this.blur.emit(this.value);
    this.valueChange.emit(this.value);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: Date): void {
    this._value = value;
    this.getDateAndTime();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  getDateAndTime() {
    if (this.value) {
      this.time = this.value;
      this.date = this.value;
    }
  }

  onValueChange() {
    if (this.date) {
      const date = this.date;
      if (this.time) {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
        date.setSeconds(this.time.getSeconds());
      } else {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
      }
      this.value = date;
    } else {
      this.value = null;
    }
  }
}
