import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTimelineComponent } from './timeline.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RappiderIconModule } from '../icon/icon.module';
import { FormatDateModule } from '../../utils';

@NgModule({
  declarations: [RappiderTimelineComponent],
  imports: [
    CommonModule,
    FormatDateModule,
    NzTimelineModule,
    NzIconModule,
    NzGridModule,
    RappiderIconModule,
  ],
  exports: [RappiderTimelineComponent],
})
export class RappiderTimelineModule {}
