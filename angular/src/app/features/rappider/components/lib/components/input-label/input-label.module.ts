import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderInputLabelComponent } from './input-label.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RappiderIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [RappiderInputLabelComponent],
  imports: [CommonModule, TranslateModule, NzToolTipModule, RappiderIconModule],
  exports: [RappiderInputLabelComponent],
})
export class RappiderInputLabelModule {}
