import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PropertyType } from '../../utils/input-template/property-type.enum';
import { RowFormColumn } from '../../utils/row-form/row-form-column.interface';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-string-array',
  templateUrl: './string-array.component.html',
  styleUrls: ['./string-array.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderStringArrayComponent),
      multi: true,
    },
  ],
})
export class RappiderStringArrayComponent implements ControlValueAccessor {
  @Input() orderable: boolean;
  @Input() orderNumbersVisibility: boolean;
  @Input() infoMessage: TextComponentConfig;

  @Output() blur = new EventEmitter<string[]>();

  CONFIG_COLUMNS: RowFormColumn[] = [
    {
      fieldName: 'value',
      typeAndFormat: {
        type: PropertyType.String,
      },
    },
  ];

  mappedValue: any;
  _value: any;

  get value() {
    return this._value;
  }

  set value(value: any[]) {
    this._value = value;
    this.onChange(this._value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string[]) {
    if (value) {
      this.mappedValue = value.map((item) => ({
        value: item,
      }));
    } else {
      this.mappedValue = [];
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onValueChange(value: any) {
    this.value = value?.map((item) => item.value);
  }

  onBlur() {
    this.blur.emit(this.value);
  }
}
