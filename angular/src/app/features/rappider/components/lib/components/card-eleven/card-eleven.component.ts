import { Component, Input } from '@angular/core';
import { CardElevenItem } from '../../utils/card-eleven/card-eleven-item.interface';
import { ParagraphComponentConfig } from '../../utils/paragraph/paragraph-component-config.interface';

@Component({
  selector: 'rappider-card-eleven',
  templateUrl: './card-eleven.component.html',
  styleUrls: ['./card-eleven.component.scss'],
})
export class RappiderCardElevenComponent {
  @Input() additionalContent: ParagraphComponentConfig;
  @Input() contentItems: CardElevenItem[];
}
