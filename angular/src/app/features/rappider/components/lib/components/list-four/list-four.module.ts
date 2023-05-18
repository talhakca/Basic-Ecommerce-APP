import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderListFourComponent } from './list-four.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';

@NgModule({
  declarations: [RappiderListFourComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderAvatarModule,
    RappiderTextModule,
    RappiderParagraphModule,
  ],
  exports: [RappiderListFourComponent],
})
export class RappiderListFourModule {}
