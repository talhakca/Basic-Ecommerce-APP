import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderAccordionModule } from '../accordion/accordion.module';
import { RappiderIconBlockModule } from '../icon-block/icon-block.module';
import { RappiderDividerModule } from '../divider/divider.module';
import { RappiderCartItemComponent } from './cart-item.component';

@NgModule({
  declarations: [RappiderCartItemComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderImageModule,
    RappiderHeadingModule,
    RappiderParagraphModule,
    RappiderButtonModule,
    RappiderAccordionModule,
    RappiderIconBlockModule,
    RappiderDividerModule,
  ],
  exports: [RappiderCartItemComponent],
})
export class RappiderCartItemModule {}
