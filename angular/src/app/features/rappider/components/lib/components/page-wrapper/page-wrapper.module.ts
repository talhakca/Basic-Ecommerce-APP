import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderPageWrapperComponent } from './page-wrapper.component';
import { RappiderTitleToolbarModule } from '../title-toolbar/title-toolbar.module';

@NgModule({
  declarations: [RappiderPageWrapperComponent],
  imports: [CommonModule, RappiderTitleToolbarModule],
  exports: [RappiderPageWrapperComponent],
})
export class RappiderPageWrapperModule {}
