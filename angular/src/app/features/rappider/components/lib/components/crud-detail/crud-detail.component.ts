import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rappider-crud-detail',
  templateUrl: './crud-detail.component.html',
  styleUrls: ['./crud-detail.component.scss'],
})
export class RappiderCrudDetailComponent {
  @Input() data: KeyValue<string, any>[];
}
