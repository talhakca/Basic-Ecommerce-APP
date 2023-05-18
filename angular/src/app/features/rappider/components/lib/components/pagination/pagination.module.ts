import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { RappiderPaginationComponent } from './pagination.component';

@NgModule({
  declarations: [RappiderPaginationComponent],
  imports: [CommonModule, NzPaginationModule],
  exports: [RappiderPaginationComponent],
})
export class RappiderPaginationModule {}
