import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RappiderTabsetComponent } from './tabset.component';

@NgModule({
  declarations: [RappiderTabsetComponent],
  imports: [CommonModule, NzTabsModule],
  exports: [RappiderTabsetComponent],
})
export class RappiderTabsetModule {}
