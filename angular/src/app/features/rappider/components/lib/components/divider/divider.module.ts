import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RappiderDividerComponent } from './divider.component';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderDividerComponent],
  imports: [CommonModule, NzDividerModule, RappiderTextModule],
  exports: [RappiderDividerComponent],
})
export class RappiderDividerModule {}
