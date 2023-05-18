import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardComponent } from './card.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderImageModule } from '../image/image.module';

@NgModule({
  declarations: [RappiderCardComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderImageModule,
    RappiderButtonModule,
    RappiderTextModule,
  ],
  exports: [RappiderCardComponent],
})
export class RappiderCardModule {}
