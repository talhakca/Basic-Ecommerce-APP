import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderDrawerComponent } from './drawer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderDrawerComponent],
  imports: [CommonModule, NzDrawerModule, RappiderButtonModule],
  exports: [RappiderDrawerComponent],
})
export class RappiderDrawerModule {}
