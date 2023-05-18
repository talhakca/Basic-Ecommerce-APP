import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderCheckboxComponent } from './checkbox.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderIconModule } from '../icon/icon.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzCheckboxModule,
    TranslateModule,
    RappiderIconModule,
    NzToolTipModule,
    RappiderTextModule,
  ],
  exports: [RappiderCheckboxComponent],
})
export class RappiderCheckboxModule {}
