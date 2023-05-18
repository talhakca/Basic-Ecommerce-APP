import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RappiderAddressCardComponent } from './address-card.component';

import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextModule } from '../text/text.module';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [RappiderAddressCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderTextModule,
    RappiderHeadingModule,
    RappiderIconModule,
    RappiderButtonModule,
    NzPopconfirmModule,
  ],
  exports: [RappiderAddressCardComponent],
})
export class RappiderAddressCardModule {}
