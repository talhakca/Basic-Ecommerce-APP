import {
  Component,
  OnInit,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconComponentConfig } from '../../utils/icon';
import { SelectComponentConfig } from '../../utils/select/select-component-config.interface';
import { BorderConfig, BorderStyle } from '../../utils/shared';

@Component({
  selector: 'rappider-border-settings',
  templateUrl: './border-settings.component.html',
  styleUrls: ['./border-settings.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderBorderSettingsComponent),
      multi: true,
    },
  ],
})
export class RappiderBorderSettingsComponent
  implements OnInit, ControlValueAccessor
{
  @Output() valueChange = new EventEmitter<BorderConfig>();

  borderStyleOptions: SelectComponentConfig = {
    options: Object.entries(BorderStyle).map(([key, value]) => ({
      key: key,
      value,
    })),
  };
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

  borderIndividualSidesVisible = false;
  radiusIndividualBordersVisible = false;

  _value: BorderConfig;

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

  writeValue(value: BorderConfig): void {
    if (!value) {
      this.initBorderConfig();
    } else {
      this.value = value;
      // if border data is exist, show only border input
      this.borderIndividualSidesVisible = !value.border;
      // if border-radius data is exist, show only border radius input
      this.radiusIndividualBordersVisible = !value.borderRadius;
    }
  }

  ngOnInit(): void {
    this.initBorderConfig();
  }

  switchValueChange(switchValue, changedField: string) {
    if (changedField === 'width') {
      this.borderIndividualSidesVisible = !this.borderIndividualSidesVisible;
      if (switchValue) {
        this.value.border = null;
      } else {
        this.value.borderTop = null;
        this.value.borderRight = null;
        this.value.borderBottom = null;
        this.value.borderLeft = null;
        this.value.borderColor = null;
        this.value.borderStyle = null;
      }
    }
    if (changedField === 'radius') {
      this.radiusIndividualBordersVisible =
        !this.radiusIndividualBordersVisible;
      if (switchValue) {
        this.value.borderRadius = null;
      } else {
        this.value.borderTopLeftRadius = null;
        this.value.borderTopRightRadius = null;
        this.value.borderBottomLeftRadius = null;
        this.value.borderBottomRightRadius = null;
      }
    }
    this.triggerValuChange();
  }

  triggerValuChange() {
    this.value = { ...this.value };
  }

  initBorderConfig() {
    this.value = {
      border: null,
      borderColor: null,
      borderStyle: null,
      borderRadius: null,
      borderTop: null,
      borderRight: null,
      borderBottom: null,
      borderLeft: null,
      borderTopLeftRadius: null,
      borderTopRightRadius: null,
      borderBottomLeftRadius: null,
      borderBottomRightRadius: null,
    };
  }
}
