import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RappiderIconPickerComponent } from './icon-picker.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderModalModule } from '../modal/modal.module';

import { RappiderIconModule } from '../icon/icon.module';
import { RappiderMenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [RappiderIconPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzButtonModule,
    RappiderModalModule,
    RappiderIconModule,
    RappiderMenuModule,
  ],
  exports: [RappiderIconPickerComponent],
})
export class RappiderIconPickerModule {}
