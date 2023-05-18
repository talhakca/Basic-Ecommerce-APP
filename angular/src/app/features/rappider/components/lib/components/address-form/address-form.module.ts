import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderAddressFormComponent } from './address-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { RappiderButtonModule } from '../button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderTextareaModule } from '../textarea/textarea.module';

@NgModule({
  declarations: [RappiderAddressFormComponent],
  imports: [
    CommonModule,
    NzFormModule,
    ReactiveFormsModule,
    RappiderButtonModule,
    RappiderTextboxModule,
    RappiderTextareaModule,
    TranslateModule,
  ],
  exports: [RappiderAddressFormComponent],
})
export class RappiderAddressFormModule {}
