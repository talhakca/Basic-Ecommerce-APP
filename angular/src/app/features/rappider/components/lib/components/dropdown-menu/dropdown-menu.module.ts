import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderDropdownMenuComponent } from './dropdown-menu.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RappiderIconModule } from '../icon/icon.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [RappiderDropdownMenuComponent],
  imports: [
    CommonModule,
    NzDropDownModule,
    RappiderIconModule,
    TranslateModule,
    FormsModule,
    NzPopconfirmModule,
  ],
  exports: [RappiderDropdownMenuComponent],
})
export class RappiderDropdownMenuModule {}
