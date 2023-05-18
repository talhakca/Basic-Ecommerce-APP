import { Component, Input } from '@angular/core';
import { UnorderedListOneConfig } from '../../utils/unordered-list-one/unordered-list-one-config.interface';

@Component({
  selector: 'rappider-unordered-list-one-array',
  templateUrl: './unordered-list-one-array.component.html',
  styleUrls: ['./unordered-list-one-array.component.scss'],
})
export class RappiderUnorderedListOneArrayComponent {
  @Input() items: UnorderedListOneConfig[];
}
