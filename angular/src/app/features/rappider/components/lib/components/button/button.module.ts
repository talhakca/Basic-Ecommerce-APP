import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderButtonComponent } from './button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderIconModule } from '../icon/icon.module';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { RappiderTextModule } from '../text/text.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [RappiderButtonComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    TranslateModule,
    RappiderIconModule,
    NzPopconfirmModule,
    RappiderTextModule,
    NzToolTipModule,
  ],
  exports: [RappiderButtonComponent],
})
export class RappiderButtonModule {}
