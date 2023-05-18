import {
  Component,
  OnInit,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { BoxShadowConfig, ShadowType } from '../../utils/shared';

@Component({
  selector: 'rappider-shadow-settings',
  templateUrl: './shadow-settings.component.html',
  styleUrls: ['./shadow-settings.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderShadowSettingsComponent),
      multi: true,
    },
  ],
})
export class RappiderShadowSettingsComponent
  implements OnInit, ControlValueAccessor
{
  @Output() valueChange = new EventEmitter<BoxShadowConfig>();

  lockedIcon: IconComponentConfig = {
    name: 'fa-solid fa-lock',
    size: 'small',
    color: 'var(--text-color)',
  };
  unlockedIcon: IconComponentConfig = {
    name: 'fa-solid fa-unlock',
    size: 'small',
    color: 'var(--text-color)',
  };
  checkedSwitchTooltipTitle = 'Switch to enable shadow settings details';
  uncheckedSwitchTooltipTitle = 'Switch to disable shadow settings details';

  individualSidesVisible = false;

  _value: BoxShadowConfig;

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(this.value);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: BoxShadowConfig): void {
    if (!value) {
      this.initShadowConfig();
    } else {
      this.value = value;
    }
  }

  ngOnInit(): void {
    this.initShadowConfig();
  }

  switchValueChange() {
    this.individualSidesVisible = !this.individualSidesVisible;
  }

  triggerValuChange() {
    this.value.boxShadow = this.setShadowConfig();
    this.value = { ...this.value };
  }

  setShadowConfig() {
    return (
      this.value?.horizontalLength +
      ' ' +
      this.value?.verticalLength +
      ' ' +
      this.value?.boxShadowBlur +
      ' ' +
      this.value?.boxShadowSpread +
      ' ' +
      this.value?.shadowColor +
      ' ' +
      (this.value?.inset ? ShadowType.Inset : '')
    );
  }

  initShadowConfig() {
    this.value = {
      boxShadow: '',
      horizontalLength: '',
      verticalLength: '',
      boxShadowSpread: '',
      boxShadowBlur: '',
      shadowColor: '',
    };
  }
}
