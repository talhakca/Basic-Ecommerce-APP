import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderBorderSettingsComponent } from './border-settings.component';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderSwitchModule } from '../switch/switch.module';
import { RappiderDimensionSelectModule } from '../dimension-select/dimension-select.module';
import { RappiderColorPickerModule } from '../color-picker/color-picker.module';
import { RappiderSelectModule } from '../select/select.module';
import { FormsModule } from '@angular/forms';
import { RappiderButtonModule } from '../button/button.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [RappiderBorderSettingsComponent],
  imports: [
    CommonModule,
    RappiderTextboxModule,
    RappiderSwitchModule,
    RappiderDimensionSelectModule,
    RappiderColorPickerModule,
    RappiderSelectModule,
    FormsModule,
    RappiderButtonModule,
    NzToolTipModule,
  ],
  exports: [RappiderBorderSettingsComponent],
})
export class RappiderBorderSettingsModule {}
