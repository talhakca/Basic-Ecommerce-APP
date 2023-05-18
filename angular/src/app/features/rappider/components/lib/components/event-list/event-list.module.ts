import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderEventListComponent } from './event-list.component';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';

import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [RappiderEventListComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NzCardModule,
    RappiderButtonModule,
    NzAvatarModule,
    RappiderHeadingModule,
    RappiderTextModule,
    RappiderAvatarModule,
  ],
  exports: [RappiderEventListComponent],
})
export class RappiderEventListModule {}
