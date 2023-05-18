import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderRadioComponent } from './radio.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { RappiderTextModule } from '../text/text.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [RappiderRadioComponent],
  exports: [RappiderRadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzRadioModule,
    TranslateModule,
    RappiderTextModule,
    NzToolTipModule,
  ],
})
export class RappiderRadioModule {}
