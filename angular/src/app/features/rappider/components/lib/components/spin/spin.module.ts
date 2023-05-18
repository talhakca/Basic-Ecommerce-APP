import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderSpinComponent } from './spin.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [RappiderSpinComponent],
  imports: [CommonModule, NzSpinModule],
  exports: [RappiderSpinComponent],
})
export class RappiderSpinModule {}
