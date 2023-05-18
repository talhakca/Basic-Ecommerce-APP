import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderCardCcsComponent } from './card-ccs.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderImageModule } from '../image/image.module';

@NgModule({
  declarations: [RappiderCardCcsComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzCardModule,
    RappiderHeadingModule,
    RappiderAvatarModule,
    RappiderButtonModule,
    RappiderTextModule,
    RappiderImageModule,
  ],
  exports: [RappiderCardCcsComponent],
})
export class RappiderCardCcsModule {}
