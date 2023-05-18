import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHeadingComponent } from './heading.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RappiderHeadingComponent],
  imports: [CommonModule, TranslateModule],
  exports: [RappiderHeadingComponent],
})
export class RappiderHeadingModule {}
