import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rappider-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderColorPickerComponent),
      multi: true,
    },
  ],
})
export class RappiderColorPickerComponent {
  @Input() height: string;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  /* Button label text shown inside the OK / Apply button ('OK'). */
  @Input() okButtonText: string;
  /* Button label text shown inside the Cancel / Reset button ('Cancel'). */
  @Input() cancelButtonText: string;
  /* Additional class for customizing the Cancel / Reset button (''). 'e.g-> 'btn btn-danger btn-xs' */
  @Input() cancelButtonClass: string;
  /* Additional class for customizing the OK / Apply button ('') 'e.g-> 'btn btn-primary btn-xs' */
  @Input() okButtonClass: string;
  /* Show a Cancel / Reset button which resets the color (false). */
  @Input() cancelButtonVisible: boolean;
  /* Show an OK / Apply button which saves the color (false). */
  @Input() okButtonVisible: boolean;
  /* Save currently selected color when user clicks outside (true). */
  @Input() saveClickOutside: boolean;

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
    this.blur.emit(value);
    this.valueChange.emit(value);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
