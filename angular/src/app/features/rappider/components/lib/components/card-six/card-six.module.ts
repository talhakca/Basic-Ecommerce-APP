import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderCardSixComponent } from './card-six.component';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderCardSixComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzSkeletonModule,
    RappiderHeadingModule,
    RappiderParagraphModule,
    RappiderButtonModule,
    RappiderAvatarModule,
    RappiderImageModule,
    RappiderTextModule,
  ],
  exports: [RappiderCardSixComponent],
})
export class RappiderCardSixModule {}
