import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderCardSevenComponent } from './card-seven.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderLabelModule } from '../label/label.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderDividerModule } from '../divider/divider.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormatDateModule } from '../../utils/common-utils/pipes/format-date-pipe/format-date.module';

@NgModule({
  declarations: [RappiderCardSevenComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormatDateModule,
    NzCardModule,
    RappiderImageModule,
    RappiderHeadingModule,
    RappiderAvatarModule,
    RappiderLabelModule,
    RappiderParagraphModule,
    RappiderButtonModule,
    RappiderDividerModule,
  ],
  exports: [RappiderCardSevenComponent],
})
export class RappiderCardSevenModule {}
