import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep } from 'lodash';
import {
  Action,
  ActionBehavior,
  ActionView,
} from '../../../utils/action-utils';
import { SelectableOption } from '../../../utils/form-utils';
import { buttonTypeSelectOptions } from '../../../utils/shared/button/button-type-select-options';

@Component({
  selector: 'rappider-actions-input',
  templateUrl: './actions-input.component.html',
  styleUrls: ['./actions-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => ActionsInputComponent),
      multi: true,
    },
  ],
})
export class ActionsInputComponent implements OnInit {
  _value: Action[];
  typeSelectOptions: SelectableOption[] = Object.entries(ActionBehavior).map(
    ([key, value]) => ({ key: key, value: value })
  );
  buttonTypeSelectableOption: SelectableOption[] = Object.entries(
    ActionBehavior
  ).map(([key, value]) => ({ key: key, value: value }));
  initialAction: any = {
    type: undefined,
    title: undefined,
    fieldName: undefined,
  };

  editedIndex: number | undefined;
  isFirstInitialize = true;
  tempActionItem: Action = cloneDeep(this.initialAction);

  editButtonIconConfig = {
    type: 'FONT_AWESOME',
    name: 'fa-light fa-pen-to-square',
  };

  deleteButtonIconConfig = {
    type: 'FONT_AWESOME',
    name: 'fa-sharp fa-solid fa-trash',
  };

  /* form submittion state */
  tempValueSubmitted = false;
  /* has error while adding new item */
  hasAddError = false;
  /* if the item is new, its true else ( edits ) it's false */
  isAddingAction = false;
  /* populated example data from field type */
  populatedData: Record<string, unknown>[] = [];
  /* select component options for button type */
  buttonTypeSelectOptions = buttonTypeSelectOptions;
  /* select component options for view */
  viewSelectOptions = Object.entries(ActionView).map(([key, value]) => ({
    key: key,
    value: value,
  }));
  /* select component options for behavior */
  behaviorSelectOptions = Object.entries(ActionBehavior).map(
    ([key, value]) => ({ key: key, value: value })
  );

  ActionBehavior = ActionBehavior;
  get value() {
    return this._value;
  }

  set value(value: Action[]) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  constructor() {}

  ngOnInit(): void {}

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: Action[]) {
    if (!value) {
      this._value = [cloneDeep(this.initialAction)];
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

  addAction() {
    if (!this.editedIndex && this.editedIndex !== 0) {
      this.value.push(cloneDeep(this.initialAction));
      this.editedIndex = this.value.length - 1;
      this.hasAddError = false;
      this.isAddingAction = true;
    } else {
      this.hasAddError = true;
    }
  }

  onSave() {
    this.value[this.editedIndex] = this.tempActionItem;
    this.clearTempValue();
    this.isFirstInitialize = false;
    this.tempValueSubmitted = false;
    this.isAddingAction = false;
    this.onChange(this.value);
  }

  onEditItemClick(index: number) {
    if (this.isAddingAction) {
      this.value = this.value.filter(
        (item, index) => index !== this.value.length - 1
      );
    }
    this.tempActionItem = this.value[index];
    this.editedIndex = index;
  }

  onEditCancel() {
    if (this.isAddingAction) {
      this.value = this.value.filter(
        (item, index) => index !== this.editedIndex
      );
      this.isAddingAction = false;
    }
    this.clearTempValue();
  }

  clearTempValue() {
    this.tempActionItem = cloneDeep(this.initialAction);
    this.editedIndex = undefined;
  }

  onDeleteItemClick(deletedItemIndex: number) {
    this.value = this.value.filter((item, index) => index !== deletedItemIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.value, event.previousIndex, event.currentIndex);
    this.onChange(this.value);
  }
}
