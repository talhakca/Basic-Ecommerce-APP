import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { RappiderButtonModule } from '../button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderTextareaModule } from '../textarea/textarea.module';
import { RappiderCreditCardFormComponent } from './credit-card-form.component';
import { RappiderDatePickerModule } from '../date-picker/date-picker.module';

@NgModule({
  declarations: [RappiderCreditCardFormComponent],
  imports: [
    CommonModule,
    NzFormModule,
    ReactiveFormsModule,
    RappiderButtonModule,
    RappiderTextboxModule,
    RappiderTextareaModule,
    RappiderDatePickerModule,
    TranslateModule,
  ],
  exports: [RappiderCreditCardFormComponent],
})
export class RappiderCreditCardFormModule {}
