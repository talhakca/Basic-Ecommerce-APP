import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderIconTextComponent } from './icon-text.component';
import { RappiderTextModule } from '../text/text.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RappiderIconTextComponent],
  imports: [CommonModule, RappiderTextModule, RappiderIconModule, RouterModule],
  exports: [RappiderIconTextComponent],
})
export class RappiderIconTextModule {}
