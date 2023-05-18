import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderInputTemplateComponent } from './input-template.component';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderDatePickerModule } from '../date-picker/date-picker.module';
import { RappiderNumberInputModule } from '../number-input/number-input.module';
import { RappiderCheckboxModule } from '../checkbox/checkbox.module';
import { RappiderCodeEditorModule } from '../code-editor/code-editor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RappiderSelectModule } from '../select/select.module';
import { RappiderSwitchModule } from '../switch/switch.module';
import { RappiderDropdownMenuModule } from '../dropdown-menu/dropdown-menu.module';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [RappiderInputTemplateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RappiderTextboxModule,
    RappiderDatePickerModule,
    RappiderNumberInputModule,
    RappiderCheckboxModule,
    RappiderCodeEditorModule,
    RappiderSelectModule,
    RappiderSwitchModule,
    RappiderDropdownMenuModule,
    NzInputModule,
  ],
  exports: [RappiderInputTemplateComponent],
})
export class RappiderInputTemplateModule {}
