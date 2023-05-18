import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RappiderCommentComponent } from './comment.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';

@NgModule({
  declarations: [RappiderCommentComponent],
  imports: [
    CommonModule,
    NzCommentModule,
    NzAvatarModule,
    NzToolTipModule,
    NzIconModule,
    RappiderRateDisplayModule,
  ],
  exports: [RappiderCommentComponent],
})
export class RappiderCommentModule {}
