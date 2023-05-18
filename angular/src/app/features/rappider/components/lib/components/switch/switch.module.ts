import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderSwitchComponent } from './switch.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderSwitchComponent],
  imports: [CommonModule, NzSwitchModule, FormsModule, RappiderTextModule],
  exports: [RappiderSwitchComponent],
})
export class RappiderSwitchModule {}
