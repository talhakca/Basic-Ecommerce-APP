import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSelectorComponent } from './card-selector.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderModalModule } from '../modal/modal.module';
import { RappiderCardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [CardSelectorComponent],
  imports: [
    CommonModule,
    RappiderCardsModule,
    RappiderModalModule,
    RappiderButtonModule,
  ],
  exports: [CardSelectorComponent],
})
export class CardSelectorModule {}
