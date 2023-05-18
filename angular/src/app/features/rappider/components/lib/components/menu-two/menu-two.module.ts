import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderMenuTwoComponent } from './menu-two.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderIconModule } from '../icon/icon.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [RappiderMenuTwoComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    RappiderTagModule,
    RappiderIconModule,
    NzMenuModule,
  ],
  exports: [RappiderMenuTwoComponent],
})
export class RappiderMenuTwoModule {}
