import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RappiderProductCardComponent } from './product-card.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { RappiderButtonGroupModule } from '../button-group/button-group.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderDividerModule } from '../divider/divider.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderLabelModule } from '../label/label.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';
import { RappiderSelectModule } from '../select/select.module';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderTextareaModule } from '../textarea/textarea.module';
import { RappiderRadioGroupModule } from '../radio-group/radio-group.module';

@NgModule({
  declarations: [RappiderProductCardComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    RappiderLabelModule,
    RappiderButtonGroupModule,
    RappiderDividerModule,
    RappiderRateDisplayModule,
    RappiderParagraphModule,
    RappiderHeadingModule,
    RappiderTagModule,
    RappiderTextareaModule,
    RappiderSelectModule,
    RappiderRadioGroupModule,
    NzCardModule,
  ],
  exports: [RappiderProductCardComponent],
})
export class RappiderProductCardModule {}
