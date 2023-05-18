import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderShadowSettingsComponent } from './shadow-settings.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderDimensionSelectModule } from '../dimension-select/dimension-select.module';
import { RappiderColorPickerModule } from '../color-picker/color-picker.module';
import { RappiderSwitchModule } from '../switch/switch.module';
import { FormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RappiderShadowSettingsComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    RappiderTextboxModule,
    RappiderDimensionSelectModule,
    RappiderColorPickerModule,
    RappiderSwitchModule,
    FormsModule,
    NzToolTipModule,
    TranslateModule,
  ],
  exports: [RappiderShadowSettingsComponent],
})
export class RappiderShadowSettingsModule {}
