import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTimePickerComponent } from './time-picker.component';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RappiderTimePickerComponent],
  imports: [CommonModule, FormsModule, NzTimePickerModule],
  exports: [RappiderTimePickerComponent],
})
export class RappiderTimePickerModule {}
