import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderModalComponent } from './modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderModalComponent],
  imports: [CommonModule, NzModalModule, TranslateModule, RappiderButtonModule],
  exports: [RappiderModalComponent],
})
export class RappiderModalModule {}
