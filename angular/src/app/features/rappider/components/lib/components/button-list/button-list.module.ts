import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderButtonListComponent } from './button-list.component';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderButtonListComponent],
  imports: [CommonModule, RappiderButtonModule],
  exports: [RappiderButtonListComponent],
})
export class RappiderButtonListModule {}
