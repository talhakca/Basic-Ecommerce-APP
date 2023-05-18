import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CrudTableViewConfig } from '../../../utils/list-grid';
import { cloneDeep } from 'lodash';
import { HeadingType } from '../../../utils/heading';
import { InputSize } from '../../../utils/shared';

@Component({
  selector: 'rappider-grid-builder',
  templateUrl: './grid-builder.component.html',
  styleUrls: ['./grid-builder.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => GridBuilderComponent),
      multi: true,
    },
  ],
})
export class GridBuilderComponent implements ControlValueAccessor {
  /* holds the ngModel value */
  _value: CrudTableViewConfig;
  /* holds the temporarily value, which means when user update something we hold the data in here until form submitted */
  tempValue: CrudTableViewConfig;
  /* holds the initial value without changes */
  tempValueWithoutChanges: CrudTableViewConfig;
  /* initial empty config */
  initialGridConfig: CrudTableViewConfig = {
    columns: [],
    title: {},
  };
  /* holds the modal visibility state */
  isEditModalVisible = false;
  /* heading type options */
  headingTypeOptions = Object.entries(HeadingType).map(([key, value]) => ({
    key: key,
    value: value,
  }));
  /* input size options */
  inputSizeOptions = Object.entries(InputSize).map(([key, value]) => ({
    key: key,
    value: value,
  }));

  populatedData: Record<string, unknown>[];

  get value() {
    return this._value;
  }

  set value(value: CrudTableViewConfig) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  constructor() {}

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: CrudTableViewConfig) {
    if (!value) {
      this.tempValue = cloneDeep(this.initialGridConfig);
    } else {
      this.tempValue = value;
    }
    this.tempValueWithoutChanges = this.tempValue;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onItemsChange() {
    this.tempValue = { ...this.tempValue };
  }

  onGridConfigSave() {
    this.value = this.tempValue;
    this.closeEditModal();
  }

  onCancel() {
    this.closeEditModal();
  }

  openEditModal() {
    this.isEditModalVisible = true;
  }

  closeEditModal() {
    this.isEditModalVisible = false;
    this.tempValue = cloneDeep(this.tempValueWithoutChanges);
  }

  onColumnsChange() {
    this.tempValue = { ...this.tempValue };
  }

  onPopulatedDataChange(populatedData: Record<string, unknown>[]) {
    this.populatedData = populatedData;
  }
}
