import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderDatetimePickerComponent } from './datetime-picker.component';
import { RappiderDatePickerModule } from '../date-picker/date-picker.module';
import { RappiderTimePickerModule } from '../time-picker/time-picker.module';

@NgModule({
  declarations: [RappiderDatetimePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RappiderDatePickerModule,
    RappiderTimePickerModule,
  ],
  exports: [RappiderDatetimePickerComponent],
})
export class RappiderDatetimePickerModule {}
