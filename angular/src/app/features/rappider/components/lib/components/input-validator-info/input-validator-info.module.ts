import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderInputValidatorInfoComponent } from './input-validator-info.component';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderDataOrderService } from '../../services/data-order/data-order.service';

@NgModule({
  declarations: [RappiderInputValidatorInfoComponent],
  imports: [CommonModule, TranslateModule],
  providers: [RappiderDataOrderService],
  exports: [RappiderInputValidatorInfoComponent],
})
export class RappiderInputValidatorInfoModule {}
