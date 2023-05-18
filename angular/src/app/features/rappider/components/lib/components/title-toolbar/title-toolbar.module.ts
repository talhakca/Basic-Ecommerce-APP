import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTitleToolbarComponent } from './title-toolbar.component';
import { RappiderTitleBarModule } from '../title-bar/title-bar.module';
import { RappiderToolbarModule } from '../toolbar/toolbar.module';

@NgModule({
  declarations: [RappiderTitleToolbarComponent],
  imports: [CommonModule, RappiderTitleBarModule, RappiderToolbarModule],
  exports: [RappiderTitleToolbarComponent],
})
export class RappiderTitleToolbarModule {}
