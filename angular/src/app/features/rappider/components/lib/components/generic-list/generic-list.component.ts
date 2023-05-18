import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GenericListItem } from '../../utils';

@Component({
  selector: 'rappider-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss'],
})
export class RappiderGenericListComponent {
  @Input() emitable: boolean;
  @Input() loading: boolean;
  @Input() data: GenericListItem[];

  @Output() itemClick = new EventEmitter<GenericListItem>();

  onTitleClick(item: GenericListItem) {
    if (this.emitable) {
      this.itemClick.emit(item);
    }
  }
}
