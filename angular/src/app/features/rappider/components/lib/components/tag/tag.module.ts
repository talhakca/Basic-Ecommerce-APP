import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RappiderTagComponent } from './tag.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderTagComponent],
  exports: [RappiderTagComponent],
  imports: [CommonModule, NzTagModule, RappiderIconModule, RappiderTextModule],
})
export class RappiderTagModule {}
