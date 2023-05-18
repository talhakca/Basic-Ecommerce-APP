import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTreeSelectComponent } from './tree-select.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RappiderTreeSelectComponent],
  imports: [CommonModule, NzTreeSelectModule, FormsModule],
  exports: [RappiderTreeSelectComponent],
})
export class RappiderTreeSelectModule {}
