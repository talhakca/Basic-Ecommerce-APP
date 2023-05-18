import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RappiderButtonGroupComponent } from './button-group.component';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderButtonGroupComponent],
  imports: [CommonModule, NzButtonModule, RappiderButtonModule],
  exports: [RappiderButtonGroupComponent],
})
export class RappiderButtonGroupModule {}
