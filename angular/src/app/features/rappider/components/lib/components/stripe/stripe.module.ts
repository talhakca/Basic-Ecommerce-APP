import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderStripeComponent } from './stripe.component';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from '@environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RappiderButtonModule } from '../button/button.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [RappiderStripeComponent],
  imports: [
    CommonModule,
    NgxStripeModule.forRoot(environment['stripeApiKey'] || ''),
    FormsModule,
    ReactiveFormsModule,
    RappiderButtonModule,
    NzFormModule,
    NzInputModule,
  ],
  exports: [RappiderStripeComponent],
})
export class RappiderStripeModule {}
