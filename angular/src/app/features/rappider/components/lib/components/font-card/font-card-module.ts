import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderFontCardComponent } from './font-card.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderRadioGroupModule } from '../radio-group/radio-group.module';
@NgModule({
  declarations: [RappiderFontCardComponent],
  exports: [RappiderFontCardComponent],
  imports: [
    CommonModule,
    RappiderIconModule,
    RappiderRadioGroupModule,
    TranslateModule,
  ],
})
export class RappiderFontCardModule {}
