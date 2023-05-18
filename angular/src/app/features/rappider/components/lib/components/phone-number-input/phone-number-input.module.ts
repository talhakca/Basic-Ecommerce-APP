import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RappiderPhoneNumberInputComponent } from './phone-number-input.component';
import { RappiderSelectModule } from '../select/select.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RappiderPhoneNumberInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RappiderSelectModule,
    RappiderTextboxModule,
    TranslateModule,
  ],
  exports: [RappiderPhoneNumberInputComponent],
})
export class RappiderPhoneNumberInputModule {}
