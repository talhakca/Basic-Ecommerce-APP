import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  OnChanges,
  HostBinding,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NzMarks } from 'ng-zorro-antd/slider';
import { ColorConfig } from '../../utils/shared';
import { SliderHandleType } from '../../utils/slider';

@Component({
  selector: 'rappider-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderSliderComponent),
      multi: true,
    },
  ],
})
export class RappiderSliderComponent
  implements OnInit, OnChanges, ControlValueAccessor
{
  @Input() readonly: boolean;
  @Input() dualMode: boolean;
  @Input() minRange: number;
  @Input() maxRange: number;
  @Input() marks: NzMarks;
  @Input() step: number;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() handleType: SliderHandleType;
  @Input() disabled: boolean;
  @Input() colorSettings: ColorConfig;

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  @HostBinding('style.--slider-background-color') backgroundColor;
  @HostBinding('style.--slider-border-color') sliderColor;

  SliderHandleType = SliderHandleType;

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

  ngOnInit(): void {
    this.initDefaults();
  }

  ngOnChanges(): void {
    this.initDefaults();
  }

  initDefaults() {
    if (this.dualMode === null || this.dualMode === undefined) {
      this.dualMode = false;
    }
    if (this.readonly === null || this.readonly === undefined) {
      this.readonly = false;
    }
    this.setColorSettings();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onBlur() {
    this.blur.emit();
  }

  setColorSettings() {
    if (this.colorSettings) {
      this.backgroundColor = this.colorSettings?.backgroundColor;
      this.sliderColor = this.colorSettings?.color;
    } else {
      // ng-zorro default silder rail color
      this.backgroundColor = '#edededcc';
      this.sliderColor = 'var(--primary-color)';
    }
  }
}
