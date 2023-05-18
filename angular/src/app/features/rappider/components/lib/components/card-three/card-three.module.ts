import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardThreeComponent } from './card-three.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderCardThreeComponent],
  imports: [
    CommonModule,
    RappiderTextModule,
    RappiderImageModule,
    RappiderButtonModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderCardThreeComponent],
})
export class RappiderCardThreeModule {}
