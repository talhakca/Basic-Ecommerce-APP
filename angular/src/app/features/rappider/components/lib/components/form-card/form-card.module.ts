import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderFormCardComponent } from './form-card.component';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { FormsModule } from '@angular/forms';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderInputGroupModule } from '../input-group/input-group.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderEditFormModule } from '../edit-form/edit-form.module';

@NgModule({
  declarations: [RappiderFormCardComponent],
  imports: [
    CommonModule,
    RappiderTextModule,
    RappiderHeadingModule,
    FormsModule,
    RappiderTextboxModule,
    RappiderButtonModule,
    RappiderInputGroupModule,
    NzCardModule,
    RappiderEditFormModule,
  ],
  exports: [RappiderFormCardComponent],
})
export class RappiderFormCardModule {}
