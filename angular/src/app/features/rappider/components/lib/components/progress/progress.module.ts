import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderProgressComponent } from './progress.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [RappiderProgressComponent],
  imports: [CommonModule, NzProgressModule],
  exports: [RappiderProgressComponent],
})
export class RappiderProgressModule {}
