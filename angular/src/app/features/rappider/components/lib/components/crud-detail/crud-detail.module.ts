import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCrudDetailComponent } from './crud-detail.component';
import { RappiderTitleBarModule } from '../title-bar/title-bar.module';
import { RappiderLabelModule } from '../label/label.module';
import { RappiderTextModule } from '../text/text.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RappiderCrudDetailComponent],
  imports: [
    CommonModule,
    RappiderTitleBarModule,
    RappiderLabelModule,
    RappiderTextModule,
    TranslateModule,
  ],
  exports: [RappiderCrudDetailComponent],
})
export class RappiderCrudDetailModule {}
