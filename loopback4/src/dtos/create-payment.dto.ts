import { model, property } from '@loopback/repository';

@model()
export class CreatePaymentIntentDTO {

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

}
