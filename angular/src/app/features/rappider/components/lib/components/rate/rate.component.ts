import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'rappider-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderRateComponent),
      multi: true,
    },
  ],
})
export class RappiderRateComponent implements ControlValueAccessor, OnInit {
  @Input() allowClear: boolean;
  @Input() allowHalf: boolean;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() color: string;
  @Input() disabled = false;
  @Input() size: string;
  @Input() gap: string;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  @HostBinding('style.--rate-color') rateColor;
  @HostBinding('style.--rate-size') rateSize;
  @HostBinding('style.--rate-gap') rateGap;

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

  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnInit(): void {
    if (this.color) {
      this.rateColor = this.color;
    }
    if (this.size) {
      this.rateSize = this.size;
    }
    if (this.gap) {
      this.rateGap = this.gap;
    }
    if (!this.color) {
      this.rateColor = 'var(--warning-color)';
    }
  }

  writeValue(value): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
