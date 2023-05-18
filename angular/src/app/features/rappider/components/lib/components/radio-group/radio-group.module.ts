import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderRadioGroupComponent } from './radio-group.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { RappiderIconModule } from '../icon/icon.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [RappiderRadioGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzRadioModule,
    RappiderIconModule,
    TranslateModule,
    NzToolTipModule,
  ],
  exports: [RappiderRadioGroupComponent],
})
export class RappiderRadioGroupModule {}
