import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderAlertListComponent } from './alert-list.component';
import { RappiderAlertModule } from '../alert/alert.module';

@NgModule({
  declarations: [RappiderAlertListComponent],
  imports: [CommonModule, RappiderAlertModule],
  exports: [RappiderAlertListComponent],
})
export class RappiderAlertListModule {}
