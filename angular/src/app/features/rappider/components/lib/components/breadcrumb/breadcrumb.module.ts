import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RappiderBreadcrumbComponent } from './breadcrumb.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RappiderBreadcrumbComponent],
  imports: [CommonModule, NzBreadCrumbModule, TranslateModule],
  exports: [RappiderBreadcrumbComponent],
})
export class RappiderBreadcrumbModule {}
