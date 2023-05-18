import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rappider-key-value-display',
  templateUrl: './key-value-display.component.html',
  styleUrls: ['./key-value-display.component.scss'],
})
export class RappiderKeyValueDisplayComponent {
  @Input() items: KeyValue<string, any>[];
}
