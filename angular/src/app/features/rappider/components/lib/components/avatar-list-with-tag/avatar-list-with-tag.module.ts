import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderAvatarListWithTagComponent } from './avatar-list-with-tag.component';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderAvatarListWithTagComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzListModule,
    RappiderButtonModule,
    RappiderTagModule,
    RappiderTextModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderAvatarListWithTagComponent],
})
export class RappiderAvatarListWithTagModule {}
