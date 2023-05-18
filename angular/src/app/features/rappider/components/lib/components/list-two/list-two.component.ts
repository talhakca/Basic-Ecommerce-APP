import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ListTwoItem } from '../../utils/list-two/list-two-item.interface';

@Component({
  selector: 'rappider-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.scss'],
})
export class RappiderListTwoComponent {
  @Input() title: HeadingComponentConfig;
  @Input() items: ListTwoItem[];
}
