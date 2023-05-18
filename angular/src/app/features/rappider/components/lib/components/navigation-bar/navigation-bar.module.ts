import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';

import { RappiderNavigationBarComponent } from './navigation-bar.component';

import { RappiderIconModule } from '../icon/icon.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderMenuModule } from '../menu/menu.module';
import { RappiderDropdownMenuModule } from '../dropdown-menu/dropdown-menu.module';
import { RappiderInputGroupModule } from '../input-group/input-group.module';
import { RappiderCartPreviewModule } from '../cart-preview/cart-preview.module';
import { RappiderDrawerModule } from '../drawer/drawer.module';

@NgModule({
  declarations: [RappiderNavigationBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RappiderIconModule,
    RappiderButtonModule,
    NzInputModule,
    RappiderDropdownMenuModule,
    RappiderMenuModule,
    RappiderImageModule,
    RappiderInputGroupModule,
    RappiderCartPreviewModule,
    RappiderDrawerModule,
  ],
  exports: [RappiderNavigationBarComponent],
})
export class RappiderNavigationBarModule {}
