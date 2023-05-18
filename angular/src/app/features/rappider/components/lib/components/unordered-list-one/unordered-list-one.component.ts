import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import { IconComponentConfig } from '../../utils/icon';

@Component({
  selector: 'rappider-unordered-list-one',
  templateUrl: './unordered-list-one.component.html',
  styleUrls: ['./unordered-list-one.component.scss'],
})
export class RappiderUnorderedListOneComponent {
  @Input() titleIcon: IconComponentConfig;
  @Input() title: HeadingComponentConfig;
  @Input() list: string[];
}
