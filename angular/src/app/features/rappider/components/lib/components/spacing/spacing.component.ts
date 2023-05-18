import {
  Component,
  forwardRef,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { SpacingConfig } from '../../utils/shared';

@Component({
  selector: 'rappider-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderSpacingComponent),
      multi: true,
    },
  ],
})
export class RappiderSpacingComponent implements ControlValueAccessor, OnInit {
  @Output() valueChange = new EventEmitter<SpacingConfig>();

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
  switchChecked = false;
  _value: SpacingConfig;

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

  ngOnInit(): void {
    this.initConfig();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: SpacingConfig): void {
    if (!value) {
      this.initConfig();
    } else {
      this.value = value;
    }
  }

  switchValueChange() {
    this.switchChecked = !this.switchChecked;
  }

  triggerValuChange() {
    this.value.all = this.setValueConfig();
    this.value = { ...this.value };
  }

  setValueConfig() {
    return (
      this.value?.top +
      ' ' +
      this.value?.left +
      ' ' +
      this.value?.bottom +
      ' ' +
      this.value?.right
    );
  }

  initConfig() {
    this.value = {
      all: '',
      top: '',
      right: '',
      bottom: '',
      left: '',
    };
  }
}
