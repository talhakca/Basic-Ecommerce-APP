import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderLoadingNotificationComponent } from './loading-notification.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [RappiderLoadingNotificationComponent],
  imports: [CommonModule, NzSpinModule],
  exports: [RappiderLoadingNotificationComponent],
})
export class RappiderLoadingNotificationModule {}
