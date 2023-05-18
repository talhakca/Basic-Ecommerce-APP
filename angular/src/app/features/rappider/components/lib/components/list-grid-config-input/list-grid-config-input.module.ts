import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { RappiderModalModule } from '../modal/modal.module';

import { RappiderListGridConfigInputComponent } from './list-grid-config-input.component';

import { RappiderButtonModule } from '../button/button.module';
import { RappiderInputLabelModule } from '../input-label/input-label.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderCheckboxModule } from '../checkbox/checkbox.module';
import { RappiderJsonArrayModule } from '../json-array/json-array.module';
import { RappiderSelectModule } from '../select/select.module';

@NgModule({
  declarations: [RappiderListGridConfigInputComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    RappiderButtonModule,
    RappiderInputLabelModule,
    RappiderTextboxModule,
    RappiderCheckboxModule,
    RappiderJsonArrayModule,
    RappiderSelectModule,
    RappiderModalModule,
  ],
  exports: [RappiderListGridConfigInputComponent],
})
export class RappiderListGridConfigInputModule {}
