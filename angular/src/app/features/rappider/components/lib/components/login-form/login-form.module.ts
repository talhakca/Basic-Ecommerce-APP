import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderLoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';

@NgModule({
  declarations: [RappiderLoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    TranslateModule,
    RappiderButtonModule,
    RappiderTextboxModule,
  ],
  exports: [RappiderLoginFormComponent],
})
export class RappiderLoginFormModule {}
