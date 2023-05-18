import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RappiderAvatarComponent } from './avatar.component';
import { RappiderTextModule } from '../text/text.module';
import { RappiderIconModule } from '../icon/icon.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [RappiderAvatarComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    RappiderTextModule,
    RappiderIconModule,
    NzToolTipModule,
  ],
  exports: [RappiderAvatarComponent],
})
export class RappiderAvatarModule {}
