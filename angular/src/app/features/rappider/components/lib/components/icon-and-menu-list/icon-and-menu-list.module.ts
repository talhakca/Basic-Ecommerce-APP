import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderIconAndMenuListComponent } from './icon-and-menu-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderDropdownMenuModule } from '../dropdown-menu/dropdown-menu.module';
import { RappiderIconAndMenuListItemComponent } from './icon-and-menu-list-item/icon-and-menu-list-item.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [
    RappiderIconAndMenuListComponent,
    RappiderIconAndMenuListItemComponent,
  ],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderButtonModule,
    RappiderIconModule,
    RappiderDropdownMenuModule,
    RappiderHeadingModule,
    RappiderTextModule,
  ],
  exports: [
    RappiderIconAndMenuListComponent,
    RappiderIconAndMenuListItemComponent,
  ],
})
export class RappiderIconAndMenuListModule {}
