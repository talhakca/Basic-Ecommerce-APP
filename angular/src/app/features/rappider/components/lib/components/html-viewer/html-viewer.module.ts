import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHtmlViewerComponent } from './html-viewer.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  declarations: [RappiderHtmlViewerComponent],
  imports: [CommonModule, NzSkeletonModule],
  exports: [RappiderHtmlViewerComponent],
})
export class RappiderHtmlViewerModule {}
