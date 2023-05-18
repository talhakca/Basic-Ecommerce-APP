import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [RappiderToolbarComponent],
  imports: [CommonModule, RappiderButtonModule, TranslateModule],
  exports: [RappiderToolbarComponent],
})
export class RappiderToolbarModule {}
