import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTeamBlockComponent } from './team-block.component';
import { RappiderDividerModule } from '../divider/divider.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderTeamBlockComponent],
  imports: [
    CommonModule,
    RappiderDividerModule,
    RappiderImageModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderTeamBlockComponent],
})
export class RappiderTeamBlockModule {}
