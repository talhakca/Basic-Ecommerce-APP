import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderSelectComponent } from './select.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { RappiderButtonModule } from '../../components/button/button.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderSpinModule } from '../spin/spin.module';

@NgModule({
  declarations: [RappiderSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzSelectModule,
    TranslateModule,
    RappiderButtonModule,
    RappiderIconModule,
    RappiderSpinModule,
  ],
  exports: [RappiderSelectComponent],
})
export class RappiderSelectModule {}
