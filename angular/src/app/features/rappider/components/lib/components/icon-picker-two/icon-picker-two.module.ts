import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderIconPickerTwoComponent } from './icon-picker-two.component';
import { RappiderSearchModule } from '../search/search.module';
import { RappiderButtonModule } from '../button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RappiderCheckboxListModule } from '../checkbox-list/checkbox-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderColorPickerModule } from '../color-picker/color-picker.module';
import { RappiderDimensionSelectModule } from '../dimension-select/dimension-select.module';
import { RappiderRadioGroupModule } from '../radio-group/radio-group.module';
import { RappiderIconModule } from '../icon/icon.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderSelectModule } from '../select/select.module';

@NgModule({
  declarations: [RappiderIconPickerTwoComponent],
  imports: [
    CommonModule,
    RappiderSearchModule,
    RappiderButtonModule,
    MatIconModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzToolTipModule,
    RappiderCheckboxListModule,
    FormsModule,
    RappiderTextboxModule,
    RappiderColorPickerModule,
    RappiderDimensionSelectModule,
    RappiderRadioGroupModule,
    RappiderIconModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    TranslateModule,
    RappiderSelectModule,
  ],
  exports: [RappiderIconPickerTwoComponent],
})
export class RappiderIconPickerTwoModule {}
