import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderProfileCardComponent } from './profile-card.component';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderIconBlockModule } from '../icon-block/icon-block.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderIconAndMenuListModule } from '../icon-and-menu-list/icon-and-menu-list.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderDividerModule } from '../divider/divider.module';

@NgModule({
  declarations: [RappiderProfileCardComponent],
  imports: [
    CommonModule,
    RappiderTagModule,
    RappiderIconModule,
    RappiderIconBlockModule,
    RappiderHeadingModule,
    NzCardModule,
    RappiderButtonModule,
    RappiderTextModule,
    RappiderIconAndMenuListModule,
    RappiderImageModule,
    RappiderDividerModule,
  ],
  exports: [RappiderProfileCardComponent],
})
export class RappiderProfileCardModule {}
