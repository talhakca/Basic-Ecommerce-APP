import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderListGridDataInputComponent } from './list-grid-data-input.component';

import { RappiderModalModule } from '../modal/modal.module';

import { RappiderButtonModule } from '../button/button.module';
import { RappiderRadioModule } from '../radio/radio.module';
import { RappiderInputLabelModule } from '../input-label/input-label.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderCodeEditorModule } from '../code-editor/code-editor.module';
import { RappiderSpinModule } from '../spin/spin.module';

@NgModule({
  declarations: [RappiderListGridDataInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    RappiderButtonModule,
    RappiderRadioModule,
    RappiderCodeEditorModule,
    RappiderInputLabelModule,
    RappiderTextboxModule,
    RappiderModalModule,
    TranslateModule,
    RappiderSpinModule,
  ],
  exports: [RappiderListGridDataInputComponent],
})
export class RappiderListGridDataInputModule {}
