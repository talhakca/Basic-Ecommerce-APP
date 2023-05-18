import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { sizeSelectOptions } from '../form-builder/defaults/size-select-options';
import { InputSize } from '../../../../utils/shared/input-size/input-size.enum';
import { SelectableOption } from '../../../../utils/form-utils/selectable-option.type';
import { SelectMode } from '../../../../utils/select/select-mode.enum';
import { CrudFormItem } from '../../../../utils/edit-form/crud-form-item.interface';
import { CrudFormSelectItem } from '../../../../utils/edit-form/crud-form-select-item.interface';
import { CrudViewFormItemType } from '../../../../utils/edit-form/crud-view-form-item-type.enum';

export type CrudFormCombinedItem = CrudFormItem | CrudFormSelectItem;

@Component({
  selector: 'rappider-form-builder-input',
  templateUrl: './form-builder-input.component.html',
  styleUrls: ['./form-builder-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => FormBuilderInputComponent),
      multi: true,
    },
  ],
})
export class FormBuilderInputComponent implements ControlValueAccessor {
  _value: any[];
  typeSelectOptions: SelectableOption[] = Object.entries(
    CrudViewFormItemType
  ).map(([key, value]) => ({ key: key, value: value }));
  initialCrudFormItem: any = {
    type: undefined,
    title: undefined,
    fieldName: undefined,
  };

  rowFormColumnsConfig = [
    {
      fieldName: 'key',
      typeAndFormat: {
        type: 'string',
      },
    },
    {
      fieldName: 'value',
      typeAndFormat: {
        type: 'string',
      },
    },
  ];

  editedIndex: number | undefined;
  isFirstInitialize = true;
  tempCrudFormItem: any = cloneDeep(this.initialCrudFormItem);

  editButtonIconConfig = {
    type: 'FONT_AWESOME',
    name: 'fa-light fa-pen-to-square',
  };

  deleteButtonIconConfig = {
    type: 'FONT_AWESOME',
    name: 'fa-sharp fa-solid fa-trash',
  };

  initialSelectFormItem: any = {
    size: InputSize.Default,
    settings: {
      searchable: true,
      mode: SelectMode.Single,
      allowClear: true,
      maxTagCount: undefined,
    },
    options: [],
    invalidConfigText: undefined,
    disabled: false,
    type: CrudViewFormItemType.Select,
  };

  inputSize = sizeSelectOptions;

  CrudViewFormItemType = CrudViewFormItemType;

  /* every field name must be unique.We're holding this variable to check if there are any overlapped field name. */
  hasFieldNameError = false;
  /* form submittion state */
  tempValueSubmitted = false;
  /* has error while adding new item */
  hasAddError = false;
  /* if the item is new, its true else ( edits ) it's false */
  isAddingControl = false;

  get value() {
    return this._value;
  }

  set value(value: any[]) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  constructor() {}

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any[]) {
    if (!value) {
      this._value = [cloneDeep(this.initialCrudFormItem)];
      this.editedIndex = 0;
      this.isFirstInitialize = true;
    } else {
      this._value = value;
      this.editedIndex = undefined;
      this.isFirstInitialize = false;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  addFormControl() {
    if (!this.editedIndex && this.editedIndex !== 0) {
      this.value.push(cloneDeep(this.initialCrudFormItem));
      this.editedIndex = this.value.length - 1;
      this.hasAddError = false;
      this.isAddingControl = true;
    } else {
      this.hasAddError = true;
    }
  }

  onSave() {
    if (this.isItemValid()) {
      this.value[this.editedIndex] = {
        ...this.tempCrudFormItem,
        index: this.editedIndex,
      };
      this.clearTempValue();
      this.isFirstInitialize = false;
      this.hasFieldNameError = false;
      this.tempValueSubmitted = false;
      this.isAddingControl = false;
      this.onChange(this.value);
    } else {
      if (!this.isFieldNameUnique()) {
        this.hasFieldNameError = true;
      }
      this.tempValueSubmitted = true;
    }
  }

  onEditItemClick(index: number) {
    if (this.isAddingControl) {
      this.value = this.value.filter(
        (item, index) => index !== this.value.length - 1
      );
    }
    this.tempCrudFormItem = this.value[index];
    this.editedIndex = index;
  }

  onEditCancel() {
    if (this.isAddingControl) {
      this.value = this.value.filter(
        (item, index) => index !== this.editedIndex
      );
      this.isAddingControl = false;
    }
    this.clearTempValue();
  }

  clearTempValue() {
    this.tempCrudFormItem = cloneDeep(this.initialCrudFormItem);
    this.editedIndex = undefined;
  }

  onTypeChange(type: CrudViewFormItemType) {
    if (type === CrudViewFormItemType.Select) {
      this.tempCrudFormItem = {
        ...this.tempCrudFormItem,
        ...cloneDeep(this.initialSelectFormItem),
      };
    } else {
      this.tempCrudFormItem.type = type;
      this.deleteAdditionalFields();
    }
  }

  deleteAdditionalFields() {
    delete this.tempCrudFormItem.size;
    delete this.tempCrudFormItem.settings;
    delete this.tempCrudFormItem.options;
    delete this.tempCrudFormItem.disable;
    delete this.tempCrudFormItem.invalidConfigText;
  }

  onDeleteItemClick(deletedItemIndex: number) {
    this.value = this.value.filter((item, index) => index !== deletedItemIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.value, event.previousIndex, event.currentIndex);
    this.value = this.value.map((item, index) => ({ ...item, index: index }));
    this.onChange(this.value);
  }

  isItemValid() {
    return (
      this.tempCrudFormItem.fieldName &&
      this.tempCrudFormItem.title &&
      this.tempCrudFormItem.type &&
      this.isFieldNameUnique()
    );
  }

  isFieldNameUnique() {
    const hasOverlappedFieldName = this.value.some(
      (item, index) =>
        item.fieldName === this.tempCrudFormItem.fieldName &&
        index !== this.editedIndex
    );
    return !hasOverlappedFieldName;
  }
}
