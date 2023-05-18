import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderInternalTitleToolbarComponent } from './title-toolbar.component';
import { RappiderTitleBarModule } from '../title-bar/title-bar.module';
import { RappiderToolbarModule } from '../toolbar/toolbar.module';

@NgModule({
  declarations: [RappiderInternalTitleToolbarComponent],
  imports: [CommonModule, RappiderTitleBarModule, RappiderToolbarModule],
  exports: [RappiderInternalTitleToolbarComponent],
})
export class RappiderInternalTitleToolbarModule {}
