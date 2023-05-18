import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderInputErrorComponent } from './input-error.component';

@NgModule({
  declarations: [RappiderInputErrorComponent],
  imports: [CommonModule, TranslateModule],
  exports: [RappiderInputErrorComponent],
})
export class RappiderInputErrorModule {}
