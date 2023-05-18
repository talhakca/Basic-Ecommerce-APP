import { Component, Input } from '@angular/core';
import { AlertConfig } from '../../utils/alert';
import { AlertListDirection } from '../../utils/alert-list/alert-list.enum';

@Component({
  selector: 'rappider-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss'],
})
export class RappiderAlertListComponent {
  @Input() alertItems: AlertConfig[];
  @Input() gap: string;
  @Input() direction: AlertListDirection;
}
