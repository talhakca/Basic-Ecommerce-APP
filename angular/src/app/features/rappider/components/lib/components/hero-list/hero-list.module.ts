import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHeroListComponent } from './hero-list.component';
import { RappiderHeroModule } from '../hero/hero.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderHeroListComponent],
  imports: [
    CommonModule,
    RappiderHeroModule,
    RappiderHeadingModule,
    RappiderButtonModule,
  ],
  exports: [RappiderHeroListComponent],
})
export class RappiderHeroListModule {}
