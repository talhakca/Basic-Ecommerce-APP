import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderShoppingCartComponent } from './shopping-cart.component';
import { RappiderTextModule } from '../text/text.module';
import { RappiderCardThreeModule } from '../card-three/card-three.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderNumberInputModule } from '../number-input/number-input.module';

@NgModule({
  declarations: [RappiderShoppingCartComponent],
  imports: [
    CommonModule,
    RappiderTextModule,
    RappiderCardThreeModule,
    RappiderHeadingModule,
    RappiderButtonModule,
    RappiderNumberInputModule,
    FormsModule,
  ],
  exports: [RappiderShoppingCartComponent],
})
export class RappiderShoppingCartModule {}
