import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderMaterialSidenavComponent } from './material-sidenav.component';
import { RappiderHeadingModule } from '../heading/heading.module';

/* Material Imports */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [RappiderMaterialSidenavComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [RappiderMaterialSidenavComponent],
})
export class RappiderMaterialSidenavModule {}
