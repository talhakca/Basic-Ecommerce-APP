import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTagListComponent } from './tag-list.component';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderTagListComponent],
  imports: [CommonModule, RappiderTagModule, RappiderHeadingModule],
  exports: [RappiderTagListComponent],
})
export class RappiderTagListModule {}
