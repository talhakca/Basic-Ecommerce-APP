import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectComponent } from 'ng-zorro-antd/tree-select';
import { InputSize } from '../../utils/shared';

@Component({
  selector: 'rappider-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderTreeSelectComponent),
      multi: true,
    },
  ],
})
export class RappiderTreeSelectComponent implements ControlValueAccessor {
  @ViewChild('nzTreeSelect') nzTreeSelect: NzTreeSelectComponent;

  @Input() tree: NzTreeNodeOptions[];
  @Input() multipleSelect: boolean;
  @Input() defaultExpandAll: boolean;
  @Input() placeholder: string;
  @Input() size: InputSize;

  @Output() propertySelect = new EventEmitter<string>();
  @Output() selectedPropertyType = new EventEmitter<string>();

  _value: string[] | string;

  get value() {
    return this._value;
  }

  set value(value: string[] | string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  getSelectedNodes(value: any) {
    const selectedNodes = value?.map((item) =>
      this.nzTreeSelect.getTreeNodeByKey(item)
    );
    this.nzTreeSelect.selectedNodes = selectedNodes;
  }

  getSelectedPropertyOriginDataByKey(key: any) {
    if (this.multipleSelect) {
      /* returns origin data of selected nodes - for multiple selection */
      return this.nzTreeSelect.getSelectedNodeList().map((item) => item.origin);
    } else {
      /* returns origin data of the selected node - for singular selection */
      return this.nzTreeSelect.getTreeNodeByKey(key)?.origin;
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string[] | string) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  getSelectedTreeNodeAsTree(key: string) {
    return this.nzTreeSelect.getTreeNodeByKey(key);
  }
}
