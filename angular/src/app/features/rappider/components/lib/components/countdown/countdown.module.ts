import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { RappiderCountdownComponent } from './countdown.component';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderCountdownComponent],
  imports: [CommonModule, NzStatisticModule, RappiderHeadingModule],
  exports: [RappiderCountdownComponent],
})
export class RappiderCountdownModule {}
