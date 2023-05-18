import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import * as moment from 'moment-timezone';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyValue } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { cloneDeep, orderBy, get, isObject } from 'lodash';
import { ActionResponse } from '../../utils/action-utils/action-response.interface';
import { OrderChangeOutput } from '../../utils/list-grid/order-change-output.interface';
import { FieldValueChangeOutput } from '../../utils/list-grid/field-value-change-output.interface';
import {
  crudTableDefaultItemActionsLength,
  CrudTableViewConfig,
} from '../../utils';
import { CrudViewColumnType } from '../../utils/list-grid/crud-view-column-type.enum';
import { ActionBehavior } from '../../utils/action-utils/action-behavior.enum';
import { ActionView } from '../../utils/action-utils/action-view.enum';
import { HorizontalPosition } from '../../utils/action-utils/horizontal-position.enum';
import { CrudTableViewColumn } from '../../utils/list-grid/crud-table-view-column.interface';
import { Action } from '../../utils/action-utils/action.interface';
import { RappiderPaginationService } from '../../services/pagination/pagination.service';
import { CRUD_TABLE_DEFAULT_PAGINATION } from '../../utils/list-grid';
import { TemplatingService } from '../../services/templating/templating.service';
import { ColumnFilter } from './components/grid-filter/utils/column-filter.interface';

@Component({
  selector: 'rappider-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrls: ['./list-grid.component.scss'],
})
export class RappiderListGridComponent implements OnInit, OnChanges {
  @Input() config: CrudTableViewConfig;
  @Input() data: any[];
  @Input() loading: boolean;
  /* col span border */
  @Input() borderless: boolean;

  /* redirection url data to be replaced in specified url template */
  @Input() redirectUrlData: Record<string, any>;

  @Output() listActionClick = new EventEmitter<ActionResponse>();
  @Output() columnActionClick = new EventEmitter<ActionResponse>();
  @Output() orderChange = new EventEmitter<OrderChangeOutput>();
  @Output() selectionChange = new EventEmitter<any[]>();
  @Output() fieldValueChange = new EventEmitter<FieldValueChangeOutput>();
  @Output() columnItemClick = new EventEmitter<any>();
  @Output() listActionDropdownItemClick = new EventEmitter<any>();

  CrudViewColumnType = CrudViewColumnType;
  ActionBehavior = ActionBehavior;
  ActionView = ActionView;

  sort: KeyValue<string, 'asc' | 'desc' | null>;
  isAllSelected = false;
  isIndeterminate = false;
  selectedComponents: { [key: string]: boolean } = {};
  displayedData = [];
  visibleColumns = [];
  pageNumber = 1;
  searchText = null;

  /* TODO: this path will be moved to a service */
  noImageUrl = 'assets/images/no-image.png';

  HorizontalPosition = HorizontalPosition;

  columnFilters!: ColumnFilter[];

  /* defining exec template fn */
  execTemplate = this.templatingService.execTemplate;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paginationService: RappiderPaginationService,
    private templatingService: TemplatingService
  ) {}

  ngOnInit() {
    /* Show only visible fields */
    this.filterColumnsByVisibility();
    this.displayedData = cloneDeep(this.data || []);
    this.initFilterVariable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.orderData();
      const data = cloneDeep(this.data || []);
      this.displayedData = [...data];
      this.initDefaults();
    }
    if (changes.config) {
      this.filterColumnsByVisibility();
      this.initFilterVariable();
    }
  }

  initDefaults() {
    this.setDefaultPagination();
    this.setDefaultItemActionLength();
  }

  setDefaultItemActionLength() {
    if (this.config.itemActionsLength == null) {
      this.config.itemActionsLength = crudTableDefaultItemActionsLength;
    }
  }

  setDefaultPagination() {
    if (!this.config.showPagination) {
      this.config.pageSize = this.displayedData.length;
    } else if (!this.config.pageSize) {
      this.config.pageSize = CRUD_TABLE_DEFAULT_PAGINATION.PAGE_SIZE;
    }
  }

  orderData() {
    if (this.data?.length && this.config?.order) {
      const orderConfig = this.config.order;
      this.data = orderBy(this.data, orderConfig.fieldName, orderConfig.type);
    }
  }

  emitFieldValueChange(column: CrudTableViewColumn, value: any, data: any) {
    const updatedData: any = {};
    updatedData[column.fieldName] = value;
    const emitBody: FieldValueChangeOutput = {
      columnData: data,
      updatedData: updatedData,
    };
    this.fieldValueChange.emit(emitBody);
  }

  refreshStatus(): void {
    const validData = this.data.filter((c) => c);
    const isAllSelected =
      validData.length && validData.every((item) => item['selected']);
    const isAllUnselected = validData.every((item) => !item['selected']);
    this.isAllSelected = isAllSelected;
    this.isIndeterminate = !isAllSelected && !isAllUnselected;
    /* emit selected items */
    let selectedItems: any;

    if (this.validateMultipleSelection()) {
      selectedItems = this.displayedData.filter((item) => item.selected);
    } else {
      selectedItems = this.displayedData.find((item) => item.selected) || null;
    }

    this.selectionChange.emit(selectedItems);
  }

  onBulkSelectionChange(isSelected: boolean): void {
    if (this.validateMultipleSelection()) {
      this.displayedData = this.displayedData.map((item) => ({
        ...item,
        selected: isSelected,
      }));
    }
    this.refreshStatus();
  }

  selectItems(isSelected?: boolean, rowIndex?: number) {
    if (this.validateMultipleSelection()) {
      const selectedData = this.displayedData.find(
        (item, index) => index === rowIndex
      );
      selectedData.selected = !selectedData.selected;
    } else {
      const alreadySelectedData = this.displayedData.find(
        (item, index) => index !== rowIndex && item.selected
      );
      if (alreadySelectedData) {
        alreadySelectedData.selected = false;
      }
      const selectedData = this.displayedData[rowIndex];
      selectedData.selected = isSelected;
    }
    this.refreshStatus();
  }

  validateMultipleSelection() {
    return !this.config.enableMultipleSelection ||
      this.config.enableMultipleSelection
      ? true
      : false;
  }

  formatDate(dateValue) {
    return moment(dateValue).format('MMMM Do YYYY, h:mm:ss a');
  }

  filterData(searchText: string) {
    let data;
    if (
      searchText &&
      searchText.trim() &&
      this.config &&
      this.config.defaultSearchField
    ) {
      this.searchText = searchText;
      data = this.data.filter((item) =>
        item[this.config.defaultSearchField]
          ?.toLowerCase()
          .includes(searchText.trim().toLowerCase())
      );
    } else {
      this.searchText = null;
      data = [...this.data];
    }
    if (this.sort) {
      this.displayedData = orderBy(data, this.sort.key, this.sort.value);
    } else {
      this.displayedData = data;
    }
  }

  clearSearchText() {
    this.searchText = null;
    this.displayedData = [...this.data];
  }

  convertToDate(date) {
    return date ? moment(date).toDate() : null;
  }

  sortData(sort: KeyValue<string, string>) {
    /* get order */
    if (sort.value === 'ascend') {
      /* set sort data */
      this.sort = {
        key: sort.key /* field name */,
        value: 'asc' /* order type */,
      };
    } else if (sort.value === 'descend') {
      /* set sort data */
      this.sort = {
        key: sort.key /* field name */,
        value: 'desc' /* order type */,
      };
    } else {
      this.sort = null;
    }
    /* filter data */
    this.filterData(this.searchText);
  }

  getVisibleColumns(columns) {
    return columns?.filter((column) =>
      this.visibleColumns.includes(column.fieldName)
    );
  }

  initFilterVariable() {
    this.columnFilters = this.getVisibleColumns(this.config.columns)?.map(
      (column) => ({
        fieldName: column.fieldName,
        filterValue: null,
        columnType: column.type,
      })
    );
  }

  getVisibilityChangableColumnList(
    columns: CrudTableViewColumn[]
  ): CrudTableViewColumn[] {
    return columns?.filter((column) => column.title);
  }

  onListActionClick(action: Action) {
    if (action.behavior === ActionBehavior.Route) {
      /* navigate */
      this.redirectToUrlByAction(action, this.redirectUrlData);
    } else if (action.behavior === ActionBehavior.Emit) {
      /* emit */
      const actionResponse: ActionResponse = {
        action: action,
      };
      this.listActionClick.emit(actionResponse);
    }
  }
  cancel() {}
  onColumnActionClick(action: Action, data: any, rowIndex: number) {
    if (action.behavior === ActionBehavior.Route) {
      /* navigate */
      this.redirectToUrlByAction(action, data);
    } else if (action.behavior === ActionBehavior.Emit) {
      /* emit */
      const actionResponse: ActionResponse = {
        action: action,
        data: data,
        rowIndex:
          this.paginationService.getSkippedSizeByPagination(this.pageNumber) +
          rowIndex,
      };
      this.columnActionClick.emit(actionResponse);
    }
  }

  redirectToUrlByAction(action: Action, data: any) {
    /* navigate */
    let url = action.redirectUrl;
    /* set id if specified */
    if (action.redirectUrl && data?.id) {
      url = this.execTemplate(action.redirectUrl, data);
    }
    if (action?.redirectUrlMode === 'navigate') {
      this.router.navigate([url], { relativeTo: this.route });
    } else {
      this.router.navigateByUrl(url);
    }
  }

  onRowOrderChange(event: CdkDragDrop<any[]>): void {
    if (event.previousIndex !== event.currentIndex) {
      /* change order in the array */
      const eventPreviousIndex =
        this.paginationService.getSkippedSizeByPagination(this.pageNumber) +
        event.previousIndex;
      const eventCurrentIndex =
        this.paginationService.getSkippedSizeByPagination(this.pageNumber) +
        event.currentIndex;
      moveItemInArray(
        this.displayedData,
        eventPreviousIndex,
        eventCurrentIndex
      );
      this.displayedData = [...this.displayedData];
      /* emit order change */
      const orderStartIndex =
        this.paginationService.getSkippedSizeByPagination(this.pageNumber) +
        Math.min(event.previousIndex, event.currentIndex);
      const orderEndIndex =
        this.paginationService.getSkippedSizeByPagination(this.pageNumber) +
        Math.max(event.previousIndex, event.currentIndex);
      const orderChangeEmitData = {
        orderStartIndex: orderStartIndex,
        orderEndIndex: orderEndIndex,
        data: this.displayedData.slice(orderStartIndex, orderEndIndex + 1),
      };
      this.orderChange.emit(orderChangeEmitData);
    }
  }

  filterColumnsByVisibility() {
    this.visibleColumns =
      (<CrudTableViewColumn[]>this.config.columns)
        ?.filter((c) => c.visible !== false)
        .map((c) => c.fieldName) || [];
  }

  hasDropdownListAction(horizontalPosition: HorizontalPosition) {
    if (horizontalPosition === HorizontalPosition.Left) {
      return this.config.listActions.some(
        (item) =>
          item.displayAsMenu &&
          item.horizontalPosition !== HorizontalPosition.Right
      );
    } else {
      return this.config.listActions.some(
        (item) =>
          item.displayAsMenu &&
          item.horizontalPosition === HorizontalPosition.Right
      );
    }
  }

  onEmitItemClick(data: any) {
    this.columnItemClick.emit(data);
  }

  /* this function returns config function if exists else returns true */
  checkActionButtonVisibility(data: any[], item: any, action: Action) {
    if (this.config.handleVisibilityFn) {
      return this.config.handleVisibilityFn(data, item, action);
    } else {
      return true;
    }
  }

  isListGridDataObject(data: any): boolean {
    return isObject(data);
  }

  /* this functions checks visible buttons in config for dropdown menu visibility, if there is no visible button returns false */
  checkItemActionDropdownMenuVisiblity(
    displayedData: any[],
    item: any,
    itemActions: Action[]
  ) {
    return itemActions.some((itemAction) =>
      this.checkActionButtonVisibility(displayedData, item, itemAction)
    );
  }

  /**
   * getting field value by nested field name
   * for ex.
   * {
   *   parent: {
   *     child: 5
   *   }
   * }
   *
   * fieldName: 'parent.child'
   *
   * lodash.get supports 'parent.child' field-name to get a nested field value
   *
   * @param {*} data
   * @param {string} fieldName
   * @return {*}
   * @memberof RappiderListGridComponent
   */
  getFieldValueByFieldName(data: any, fieldName: string) {
    return get(data, fieldName);
  }

  onDataFilter(data) {
    this.displayedData = data;
  }

  onListActionDropdownItemClick(action: Action) {
    if (action.behavior === ActionBehavior.Emit) {
      this.listActionDropdownItemClick.emit(action);
    }
  }
}
