import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderPromoComponent } from './promo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RappiderPromoComponent],
  imports: [CommonModule, RouterModule, RappiderTagModule],
  exports: [RappiderPromoComponent],
})
export class RappiderPromoModule {}
