import { Component, Input, OnInit } from '@angular/core';
import { DetailTableItem } from '../../utils';

@Component({
  selector: 'rappider-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.scss'],
})
export class RappiderDetailTableComponent {
  /* string inputs */
  @Input() items: DetailTableItem[];
}
