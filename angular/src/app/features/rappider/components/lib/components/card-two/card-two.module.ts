import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardTwoComponent } from './card-two.component';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderDividerModule } from '../divider/divider.module';
import { RouterModule } from '@angular/router';
import { RappiderImageModule } from '../image/image.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderCardTwoComponent],
  imports: [
    CommonModule,
    RouterModule,
    RappiderTagModule,
    RappiderDividerModule,
    RappiderImageModule,
    RappiderAvatarModule,
    RappiderHeadingModule,
    RappiderTextModule,
  ],
  exports: [RappiderCardTwoComponent],
})
export class RappiderCardTwoModule {}
