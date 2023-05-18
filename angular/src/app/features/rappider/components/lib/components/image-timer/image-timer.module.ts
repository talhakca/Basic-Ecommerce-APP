import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderImageTimerComponent } from './image-timer.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { RappiderCountdownModule } from '../countdown/countdown.module';
@NgModule({
  declarations: [RappiderImageTimerComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderTextModule,
    RappiderImageModule,
    NzStatisticModule,
    RappiderCountdownModule,
  ],
  exports: [RappiderImageTimerComponent],
})
export class RappiderImageTimerModule {}
