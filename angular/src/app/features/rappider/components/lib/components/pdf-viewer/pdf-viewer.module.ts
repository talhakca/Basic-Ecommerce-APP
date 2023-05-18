import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderPdfViewerComponent } from './pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [RappiderPdfViewerComponent],
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  exports: [RappiderPdfViewerComponent],
})
export class RappiderPdfViewerModule {}
