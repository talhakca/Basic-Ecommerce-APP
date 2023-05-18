import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderBlockquoteComponent } from './blockquote.component';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderBlockquoteComponent],
  imports: [CommonModule, RappiderTextModule],
  exports: [RappiderBlockquoteComponent],
})
export class RappiderBlockquoteModule {}
