import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { KeyValue } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { cloneDeep } from 'lodash';
import { Subscription } from 'rxjs';
import { FormService } from '../../services';
import { RowFormColumn } from '../../utils/row-form';
import { UniqueValidator } from '../../utils/validator-utils';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-inline-row-form',
  templateUrl: './inline-row-form.component.html',
  styleUrls: ['./inline-row-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderInlineRowFormComponent),
      multi: true,
    },
  ],
})
export class RappiderInlineRowFormComponent
  implements OnInit, OnChanges, OnDestroy
{
  /* orderable */
  @Input() orderable: boolean;
  /* columns */
  @Input() columns: RowFormColumn[];
  @Input() orderNumbersVisibility: boolean;
  @Input() infoMessage: TextComponentConfig;

  /* returns KeyValue paired data of the row */
  @Output() rowDataChange = new EventEmitter<KeyValue<string, any>>();
  /* returns nothing, just trigger */
  @Output() rowInsert = new EventEmitter();
  /* returns nothing, just trigger */
  @Output() rowIndexChange = new EventEmitter();
  /* returns deleted row data */
  @Output() rowDelete = new EventEmitter<KeyValue<string, any>>();
  @Output() blur = new EventEmitter();
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;

  subscription: Subscription;

  _value: any;
  initialValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.initRowListForm();
    this.insertListItem();
    this.subscription = this.subscribeToFormValueChangesForSyncValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.initRowListForm();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get value() {
    return this._value;
  }

  set value(value: any[]) {
    if (value != null) {
      this._value = value;
    } else {
      this._value = [];
    }
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value) {
    if (value != null) {
      this._value = value;
    } else {
      this._value = [];
    }
    this.initialValue = cloneDeep(value);
    this.setFormItems(value);
    this.insertListItem();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  subscribeToFormValueChangesForSyncValue() {
    return this.form.valueChanges.subscribe((formValue) => {
      const validRow = formValue?.rows?.filter(
        (row) => !Object.values(row)?.every((column) => column == null)
      );
      this.value = [...validRow];
    });
  }

  setFormItems(value: any[]) {
    /* if the datas not initialized to the form then add them all to the form */
    if (value && this.form) {
      this.getRowsFormArray().clear();
      value.forEach((item) => this.insertListItemByData(item));
    }
  }

  initRowListForm() {
    /* set form as null if config is invalid */
    if (!this.columns?.length) {
      this.form = null;
    } else {
      /* set form array validators */
      const uniqueFieldNames = this.columns
        .filter((column) => column.unique)
        .map((column) => column.fieldName);
      const formArrayValidators: any[] = [
        ...uniqueFieldNames.map((fieldName) => UniqueValidator(fieldName)),
      ];
      /* create form array */
      this.form = this.formBuilder.group({
        rows: this.formBuilder.array([], { validators: formArrayValidators }),
      });
    }
  }

  createRowForm(data?: any) {
    /* create a list item */
    const formFields = {};
    this.columns.forEach((column) => {
      /* get initial value */
      const value = (data && data[column.fieldName]) || null;
      /* get form field validators */
      const fieldValidators =
        column.validators
          ?.filter((validator) => validator.type)
          .map((validator) => validator.type) || [];
      /* set form field */
      formFields[column.fieldName] = [value, fieldValidators];
    });
    /* create form group */
    const form = this.formBuilder.group(formFields);
    if (data) {
      this.formService.checkFormValidation(form);
    }
    return form;
  }

  getRowsFormArray(): FormArray {
    return <FormArray>this.form?.get('rows');
  }

  isEmptyObject(row: any): boolean {
    return !Object.values(row).some(
      (value) => value !== null && value !== '' && value !== undefined
    );
  }

  getErrorsByFieldName(rowIndex: number, fieldName: string) {
    return (<FormArray>this.getRowsFormArray()?.controls[rowIndex])?.controls[
      fieldName
    ]?.errors;
  }

  getErrorMessagesByErrors(errorKey: string) {
    const errorMessages = this.columns.map(
      (column) =>
        column.validators?.find((validator) => errorKey === validator.errorKey)
          ?.errorMessage
    );
    return errorMessages?.filter((e) => e);
  }

  removeEmptyListItems() {
    const rowsFormArray = this.getRowsFormArray();
    if (rowsFormArray?.length) {
      for (let i = 0; i < rowsFormArray.length; i++) {
        const isEmpty = this.isEmptyObject(rowsFormArray.controls[i].value);
        if (isEmpty) {
          this.removeListItem(i);
          i--;
        }
      }
    }
  }

  insertListItem() {
    /* remove empty list items */
    this.removeEmptyListItems();
    /* push new row form */
    const newRowForm = this.createRowForm();
    this.getRowsFormArray().push(newRowForm);
    /* emit row insert */
    this.rowInsert.emit();
  }

  insertListItemByData(data?: any) {
    /* remove empty list items */
    this.removeEmptyListItems();
    /* push new row form */
    const newRowForm = this.createRowForm(data);
    this.getRowsFormArray().push(newRowForm);
  }

  removeListItem(index: number) {
    const rowsFormArray = this.getRowsFormArray();
    const deletedData = rowsFormArray.at(index).value;
    rowsFormArray.removeAt(index);
    this.rowDelete.emit(deletedData);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (this.orderable) {
      if (event.previousIndex !== event.currentIndex) {
        const rowsFormArray = this.getRowsFormArray();
        moveItemInArray(
          rowsFormArray.controls,
          event.previousIndex,
          event.currentIndex
        );
        /* move rows */
        moveItemInArray(
          this.form.value.rows,
          event.previousIndex,
          event.currentIndex
        );
        this.rowIndexChange.emit();
      }
    }
  }

  onRowDataChange(index: number) {
    /* Check if the line is valid */
    const isValid = this.getRowsFormArray().at(index).valid;
    /* Performs the transaction if the changed data is valid */
    if (isValid) {
      /* get changed row data */
      const rowData = this.getRowsFormArray().at(index).value;
      /* emit row data */
      this.rowDataChange.emit(rowData);
    }
    this.insertListItem();
  }

  emtyRowControl(index: number) {
    const rowsFormArray = this.getRowsFormArray();
    const fieldNames = this.columns.map((column) => column.fieldName);
    return fieldNames.some(
      (fieldName) => rowsFormArray.at(index).value[fieldName] != null
    );
  }

  getVisibleColumns(columns) {
    return columns?.filter((column) => column.visible !== false);
  }
}
