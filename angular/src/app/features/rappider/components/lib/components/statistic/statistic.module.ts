import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { RappiderStatisticComponent } from './statistic.component';
import { RappiderIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [RappiderStatisticComponent],
  imports: [CommonModule, NzStatisticModule, RappiderIconModule],
  exports: [RappiderStatisticComponent],
})
export class RappiderStatisticModule {}
