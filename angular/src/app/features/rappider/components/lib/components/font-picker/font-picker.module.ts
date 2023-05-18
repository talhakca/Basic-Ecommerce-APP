import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RappiderFontPickerComponent } from './font-picker.component';

// Module import
import { RappiderInputGroupModule } from '../input-group/input-group.module';
import { RappiderSelectModule } from '../select/select.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderSliderModule } from '../slider/slider.module';
import { RappiderFontCardModule } from '../font-card/font-card-module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [RappiderFontPickerComponent],
  imports: [
    CommonModule,
    NzPaginationModule,
    RappiderInputGroupModule,
    RappiderSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RappiderTextboxModule,
    RappiderSliderModule,
    RappiderFontCardModule,
  ],
  exports: [RappiderFontPickerComponent],
})
export class RappiderFontPickerModule {}
