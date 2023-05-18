import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ListFourItem } from '../../utils/list-four/list-four-item.interface';

@Component({
  selector: 'rappider-list-four',
  templateUrl: './list-four.component.html',
  styleUrls: ['./list-four.component.scss'],
})
export class RappiderListFourComponent {
  /* heading for component title */
  @Input() cardTitle: HeadingComponentConfig;
  /* interface of list four items */
  @Input() items: ListFourItem[];
}
