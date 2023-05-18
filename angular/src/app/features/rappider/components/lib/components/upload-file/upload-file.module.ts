import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderUploadFileComponent } from './upload-file.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextModule } from '../text/text.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RappiderUploadFileComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    RappiderTextModule,
    TranslateModule,
  ],
  exports: [RappiderUploadFileComponent],
})
export class RappiderUploadFileModule {}
