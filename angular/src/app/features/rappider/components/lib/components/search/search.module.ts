import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderSearchComponent } from './search.component';
import { RappiderAutoCompleteModule } from '../auto-complete/auto-complete.module';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderSearchComponent],
  imports: [CommonModule, RappiderAutoCompleteModule, RappiderButtonModule],
  exports: [RappiderSearchComponent],
})
export class RappiderSearchModule {}
