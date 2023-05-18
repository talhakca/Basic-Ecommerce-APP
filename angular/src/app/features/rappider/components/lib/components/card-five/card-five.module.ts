import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderCardFiveComponent } from './card-five.component';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [RappiderCardFiveComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderParagraphModule,
    RappiderHeadingModule,
    RappiderButtonModule,
    RappiderAvatarModule,
  ],
  exports: [RappiderCardFiveComponent],
})
export class RappiderCardFiveModule {}
