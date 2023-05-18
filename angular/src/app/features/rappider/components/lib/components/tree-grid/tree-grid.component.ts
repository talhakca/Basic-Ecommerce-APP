import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { DropdownMenuItem } from '../../utils/dropdown-menu/dropdown-menu-item.interface';
import { DropdownMenuTriggerType } from '../../utils/dropdown-menu/dropdown-menu-trigger-type.enum';
import { DropdownMenuComponentConfig } from '../../utils/dropdown-menu/dropdown-menu.interface';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { IconType } from '../../utils/icon/icon-type.enum';
import { NgZorroIconTheme } from '../../utils/icon/ng-zorro-icon-theme.enum';
import { SelectionType } from '../../utils/tree-grid/selection-type.enum';
import { TreeGridColumnType } from '../../utils/tree-grid/tree-grid-column-type.enum';
import { TreeGridHeader } from '../../utils/tree-grid/tree-grid-header.interface';

@Component({
  selector: 'rappider-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class RappiderTreeGridComponent implements OnInit, OnChanges {
  // #region expand icon inputs
  /**
   * Expanded icon (default = folder-open)
   * If you do not want an icon, send an empty input
   *
   * @type {string}
   * @memberof TreeTableComponent
   */
  @Input() expandedIcon: IconComponentConfig = {
    name: 'folder-open',
    theme: NgZorroIconTheme.Outline,
    type: IconType.NgZorro,
  };
  /**
   * Collapse icon (default = folder)
   * If you do not want an icon, send an empty input
   *
   * @type {string}
   * @memberof TreeTableComponent
   */
  @Input() collapseIcon: IconComponentConfig = {
    name: 'folder',
    theme: NgZorroIconTheme.Outline,
    type: IconType.NgZorro,
  };
  /**
   * Leaf icon (default = file)
   * If you do not want an icon, send an empty input
   *
   * @type {string}
   * @memberof TreeTableComponent
   */
  @Input() leafIcon: IconComponentConfig = {
    name: 'file',
    theme: NgZorroIconTheme.Outline,
    type: IconType.NgZorro,
  };

  // #endregion expand icon inputs

  // #region Dropdown inputs

  @Input() fileDropdownMenu: DropdownMenuComponentConfig = {
    triggerType: DropdownMenuTriggerType.Click,
  };

  @Input() folderDropdownMenu: DropdownMenuComponentConfig;

  // #endregion Dropdown inputs

  /**
   * Field names of branches
   *
   * @type {string[]}
   * @memberof TreeTableComponent
   */
  @Input() childrenFieldNames: string[];

  /**
   * Defines in which column the expand button will appear.
   *
   * @type {string}
   * @memberof TreeTableComponent
   */
  @Input() expandableFieldName: string;
  /**
   * Tree data.
   *
   * @type {NzTreeNodeOptions[]}
   * @memberof TreeTableComponent
   */
  @Input() data: NzTreeNodeOptions[];
  /**
   * Column names
   *
   * @type {TreeGridHeader[]}
   * @memberof TreeTableComponent
   */
  @Input() headers: TreeGridHeader[];

  /**
   * Selection status of list items
   *
   * @type {boolean}
   * @memberof TreeTableComponent
   */
  @Input() isSelectable: boolean;

  /**
   * Defines which types of items to select
   *
   * @type {SelectionType}
   * @memberof TreeTableComponent
   */
  @Input() selectionType = SelectionType.All;

  /**
   * Multiple Selection
   *
   * @type {boolean}
   * @memberof TreeTableComponent
   */
  @Input() multipleSelection: boolean;

  /**
   * Works when the item is selected
   *
   * @memberof TreeTableComponent
   */
  @Output() itemSelect = new EventEmitter<NzTreeNodeOptions>();

  /**
   * Works when the item is expanded
   *
   * @memberof TreeTableComponent
   */
  @Output() itemExpand = new EventEmitter<NzTreeNodeOptions>();

  /**
   * Works when the item is collapsed
   *
   * @memberof TreeGridComponent
   */
  @Output() itemCollapse = new EventEmitter<NzTreeNodeOptions>();

  /**
   * Works when the dropdown menu item click
   *
   * @memberof TreeGridComponent
   */
  @Output() dropdownMenuItemClick = new EventEmitter<{
    dropdownMenuItem: DropdownMenuItem;
    node: NzTreeNodeOptions;
  }>();

  setOfChecked = new Set<NzTreeNodeOptions>();
  mapOfExpandedData: { [key: string]: NzTreeNodeOptions[] } = {};
  SelectionType = SelectionType;
  TreeGridColumnType = TreeGridColumnType;

  ngOnInit(): void {
    this.sortHeader();
    this.mapData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.mapData();
    }
  }

  onDropdownMenuItemClick(
    dropdownMenuItem: DropdownMenuItem,
    node: NzTreeNodeOptions
  ) {
    const event = {
      dropdownMenuItem: dropdownMenuItem,
      node: node,
    };
    if (event) {
      this.dropdownMenuItemClick.emit(event);
    }
  }

  /**
   * Shorting header array by index number.
   */
  sortHeader() {
    // copy the array before sorting.
    this.headers = this.headers
      .slice()
      .sort((a, b) => (a.index < b.index ? -1 : 1));
  }

  /**
   * Emits the item to the wrapper component when the item is expanded and sets expanded = true.
   * Finds all childrens (by childrenFieldNames) when item collapsed and sets expanded = false and emits the item to the wrapper.
   */
  onChangeExpand(
    event: boolean,
    node: NzTreeNodeOptions,
    data: NzTreeNodeOptions[]
  ) {
    if (event) {
      this.itemExpand.emit(node);
      node.expanded = true;
    } else {
      node.expanded = false;
      this.itemCollapse.emit(node);
      this.childrenFieldNames?.forEach((childrenFieldName) => {
        node[childrenFieldName]?.forEach((child) => {
          const childNode = data.find((target) => target.key === child.key);
          childNode.expanded = false;
          this.itemCollapse.emit(childNode);
          this.onChangeExpand(false, childNode, data);
        });
      });
    }
  }

  // #region DATA MAPPING FOR TREE TO LIST

  mapData() {
    this.data?.forEach((item) => {
      this.mapOfExpandedData[item?.key] = this.convertTreeToList(item);
    });
  }

  /**
   * Converts a tree structure data to a list structure.
   * Categorizes according to the id of the root file.
   */
  convertTreeToList(root: NzTreeNodeOptions): NzTreeNodeOptions[] {
    let stack: NzTreeNodeOptions[] = [];
    const array: NzTreeNodeOptions[] = [];
    const hashMap = {};
    stack.push({
      ...root,
      level: 0,
      expanded: true,
    });
    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      /**
       * The related sub-items are thrown into the stack by navigating through
       * the tree data according to the given childrenFieldNames.
       * Then the nodes in the stack are pushed one by one into the array.
       * The item's position is determined through the level.
       */
      this.childrenFieldNames.forEach((childrenFieldName) => {
        if (node[childrenFieldName]) {
          node[childrenFieldName].forEach((children) => {
            stack = [
              ...stack,
              {
                ...children,
                level: node?.level + 1 || 1,
                expanded: children.expanded,
                parent: node,
              },
            ];
          });
        }
      });
    }
    return array;
  }

  visitNode(
    node: NzTreeNodeOptions,
    hashMap: { [key: string]: boolean },
    array: NzTreeNodeOptions[]
  ): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  // #endregion DATA MAPPING FOR TREE TO LIST

  // #region CHECKBOX

  onItemChecked(item: NzTreeNodeOptions, checked: boolean): void {
    this.updateCheckedSet(item, checked);
    this.onCheckboxDataChange();
  }

  updateCheckedSet(item: NzTreeNodeOptions, checked: boolean): void {
    if (checked) {
      if (!this.multipleSelection) {
        this.setOfChecked.clear();
      }
      this.setOfChecked.add(item);
    } else {
      this.setOfChecked.delete(item);
    }
  }

  /**
   * Emitting to wrapper, when checkbox data changes.
   * Emitting list or object, depending on the multipleSelection.
   * Mapping the origin property to emit real data.
   */
  onCheckboxDataChange(): void {
    if (this.multipleSelection) {
      let checkedItems;
      this.data.forEach((item) => {
        checkedItems =
          this.mapOfExpandedData[item.key].filter((element) =>
            this.setOfChecked.has(element)
          ) || [];
      });
      this.itemSelect.emit(checkedItems);
    } else {
      let checkedItem;
      this.data.forEach((item) => {
        checkedItem =
          this.mapOfExpandedData[item.key].find((element) =>
            this.setOfChecked.has(element)
          ) || null;
      });
      this.itemSelect.emit(checkedItem);
    }
  }

  // #endregion CHECKBOX
}
