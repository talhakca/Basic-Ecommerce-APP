import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderListTwoComponent } from './list-two.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';

@NgModule({
  declarations: [RappiderListTwoComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderAvatarModule,
    RappiderTextModule,
    RappiderParagraphModule,
  ],
  exports: [RappiderListTwoComponent],
})
export class RappiderListTwoModule {}
