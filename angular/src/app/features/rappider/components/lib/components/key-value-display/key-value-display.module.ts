/* Angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Rappider modules */
import { RappiderTextModule } from '../text/text.module';
/* components */
import { RappiderKeyValueDisplayComponent } from './key-value-display.component';

@NgModule({
  declarations: [RappiderKeyValueDisplayComponent],
  imports: [CommonModule, RappiderTextModule],
  exports: [RappiderKeyValueDisplayComponent],
})
export class RappiderKeyValueDisplayModule {}
