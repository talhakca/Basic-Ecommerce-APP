import { Component, Input } from '@angular/core';
import { CardNineItem } from '../../utils/card-nine/card-nine-item';

@Component({
  selector: 'rappider-card-nine',
  templateUrl: './card-nine.component.html',
  styleUrls: ['./card-nine.component.scss'],
})
export class RappiderCardNineComponent {
  @Input() items: CardNineItem[];
}
