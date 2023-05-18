import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardOneComponentConfig, CardOneButtonOutput } from '../../utils';
import {
  CardOneListCardClickOutput,
  CardOneListButtonClickOutput,
} from '../../utils/card-one-list';
import { ItemPerRow } from '../../utils/card-one-list/item-per-row.enum';

@Component({
  selector: 'rappider-card-one-list',
  templateUrl: './card-one-list.component.html',
  styleUrls: ['./card-one-list.component.scss'],
})
export class RappiderCardOneListComponent {
  @Input() items: CardOneComponentConfig[];
  /**
   * specifies column count for per row
   *
   * @type {ItemPerRow}
   * @memberof RappiderCardOneListComponent
   */
  @Input() itemCountPerRow: ItemPerRow;
  @Input() showTitleOnImage: boolean;
  @Input() showDescriptionOnImage: boolean;

  @Output() cardClick = new EventEmitter<CardOneListCardClickOutput>();
  @Output() imageButtonClick = new EventEmitter<CardOneListButtonClickOutput>();
  @Output() additionalButtonClick = new EventEmitter();

  onCardClick(data: any, item: CardOneComponentConfig) {
    this.cardClick.emit({ data, item });
  }

  onImageButtonClick(
    cardOneButtonOutput: CardOneButtonOutput,
    item: CardOneComponentConfig
  ) {
    this.imageButtonClick.emit({ cardOneButtonOutput, item });
  }

  onAdditionalButtonClick(
    cardOneButtonOutput: CardOneButtonOutput,
    item: CardOneComponentConfig
  ) {
    this.additionalButtonClick.emit({ cardOneButtonOutput, item });
  }

  calculateColumns() {
    switch (this.itemCountPerRow) {
      case ItemPerRow.One:
        return 'col-12';
      case ItemPerRow.Two:
        return 'col-lg-6 col-md-12';
      case ItemPerRow.Three:
        return 'col-lg-4 col-md-6 col-sm-12';
      case ItemPerRow.Four:
        return 'col-lg-3 col-md-6 col-sm-12';
      case ItemPerRow.Auto:
        return 'col';
      default:
        return 'col';
    }
  }
}
