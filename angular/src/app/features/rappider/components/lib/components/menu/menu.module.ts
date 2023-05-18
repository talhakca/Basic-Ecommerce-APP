import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderMenuComponent } from './menu.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { RappiderIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [RappiderMenuComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    RappiderIconModule,
    NzTagModule,
    TranslateModule,
    NzToolTipModule,
  ],
  exports: [RappiderMenuComponent],
})
export class RappiderMenuModule {}
