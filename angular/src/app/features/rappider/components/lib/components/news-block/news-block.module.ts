import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderNewsBlockComponent } from './news-block.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RappiderNewsBlockComponent],
  imports: [CommonModule, RouterModule],
  exports: [RappiderNewsBlockComponent],
})
export class RappiderNewsBlockModule {}
