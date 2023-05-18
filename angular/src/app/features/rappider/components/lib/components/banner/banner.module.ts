import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderBannerComponent } from './banner.component';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderBannerComponent],
  imports: [CommonModule, RappiderButtonModule, RappiderHeadingModule],
  exports: [RappiderBannerComponent],
})
export class RappiderBannerModule {}
