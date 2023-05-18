import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTimeNoticeCardComponent } from './time-notice-card.component';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderTimeNoticeCardComponent],
  imports: [CommonModule, RappiderTextModule],
  exports: [RappiderTimeNoticeCardComponent],
})
export class RappiderTimeNoticeCardModule {}
