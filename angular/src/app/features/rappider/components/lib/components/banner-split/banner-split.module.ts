import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderBannerSplitComponent } from './banner-split.component';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderBannerSplitComponent],
  imports: [CommonModule, RappiderButtonModule, RappiderHeadingModule],
  exports: [RappiderBannerSplitComponent],
})
export class RappiderBannerSplitModule {}
