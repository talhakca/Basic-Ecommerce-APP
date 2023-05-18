import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RappiderTimelineCardComponent } from './timeline-card.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTimelineModule } from '../timeline/timeline.module';

import { FormatDateModule } from '../../utils';

@NgModule({
  declarations: [RappiderTimelineCardComponent],
  imports: [
    CommonModule,
    FormatDateModule,
    NzTimelineModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    RappiderIconModule,
    RappiderButtonModule,
    RappiderTimelineModule,
  ],
  exports: [RappiderTimelineCardComponent],
})
export class RappiderTimelineCardModule {}
