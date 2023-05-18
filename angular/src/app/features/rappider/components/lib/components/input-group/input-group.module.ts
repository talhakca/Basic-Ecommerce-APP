import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RappiderInputGroupComponent } from './input-group.component';
import { FormsModule } from '@angular/forms';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderInputGroupComponent],
  imports: [
    CommonModule,
    NzInputModule,
    FormsModule,
    RappiderIconModule,
    RappiderTextboxModule,
    RappiderButtonModule,
  ],
  exports: [RappiderInputGroupComponent],
})
export class RappiderInputGroupModule {}
