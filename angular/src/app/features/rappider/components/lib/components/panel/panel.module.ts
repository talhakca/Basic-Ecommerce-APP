import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderPanelComponent } from './panel.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderPanelComponent],
  imports: [CommonModule, RappiderIconModule, RappiderHeadingModule],
  exports: [RappiderPanelComponent],
})
export class RappiderPanelModule {}
