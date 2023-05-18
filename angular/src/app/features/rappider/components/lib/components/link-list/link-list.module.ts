import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderLinkListComponent } from './link-list.component';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderLinkListComponent],
  imports: [CommonModule, RappiderButtonModule],
  exports: [RappiderLinkListComponent],
})
export class RappiderLinkListModule {}
