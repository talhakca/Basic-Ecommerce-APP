import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderAvatarListComponent } from './avatar-list.component';
import { RouterModule } from '@angular/router';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [RappiderAvatarListComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderButtonModule,
    NzAvatarModule,
    RouterModule,
    RappiderHeadingModule,
    RappiderAvatarModule,
  ],
  exports: [RappiderAvatarListComponent],
})
export class RappiderAvatarListModule {}
