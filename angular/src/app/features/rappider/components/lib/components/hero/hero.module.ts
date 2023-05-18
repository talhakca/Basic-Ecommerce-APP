import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHeroComponent } from './hero.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderImageModule } from '../image/image.module';

@NgModule({
  declarations: [RappiderHeroComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    RappiderHeadingModule,
    RappiderTextModule,
    RappiderImageModule,
  ],
  exports: [RappiderHeroComponent],
})
export class RappiderHeroModule {}
