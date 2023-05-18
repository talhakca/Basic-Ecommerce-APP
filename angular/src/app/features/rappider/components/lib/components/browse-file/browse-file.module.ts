import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderBrowseFileComponent } from './browse-file.component';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderBrowseFileComponent],
  imports: [CommonModule, RappiderTextModule],
  exports: [RappiderBrowseFileComponent],
})
export class RappiderBrowseFileModule {}
