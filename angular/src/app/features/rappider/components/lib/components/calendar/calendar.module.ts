import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCalendarComponent } from './calendar.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { FormsModule } from '@angular/forms';
import { RappiderBadgeModule } from '../badge/badge.module';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderEditFormModule } from '../edit-form/edit-form.module';
import { RappiderIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [RappiderCalendarComponent],
  imports: [
    CommonModule,
    NzCalendarModule,
    FormsModule,
    RappiderBadgeModule,
    NzPopoverModule,
    RappiderButtonModule,
    RappiderEditFormModule,
    RappiderIconModule,
  ],
  exports: [RappiderCalendarComponent],
})
export class RappiderCalendarModule {}
