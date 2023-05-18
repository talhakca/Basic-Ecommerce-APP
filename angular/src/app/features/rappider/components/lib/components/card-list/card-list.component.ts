import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CardButtonActionResponse } from '../../utils/card/card-button-action-response.interface';
import { CardButton } from '../../utils/card/card-button.interface';
import { CardListItem } from '../../utils/card/card-list-item.interface';

@Component({
  selector: 'rappider-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class RappiderCardListComponent {
  /* Input for the data that will display in Card */
  @Input() data: CardListItem[];
  /* card loading state */
  @Input() loading: boolean;

  @Output() cardClick: EventEmitter<CardListItem> = new EventEmitter();
  @Output() buttonClick: EventEmitter<CardButtonActionResponse> =
    new EventEmitter();

  /* card click */
  onCardClick(cardListItem: CardListItem) {
    this.cardClick.emit(cardListItem);
  }

  /* button click */
  onButtonClick(button: CardButton) {
    const response: CardButtonActionResponse = {
      actionKey: button.actionKey,
      actionType: button.actionType,
      actionData: button.actionData,
    };
    this.buttonClick.emit(response);
  }
}
