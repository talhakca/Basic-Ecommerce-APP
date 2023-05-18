import { model, property } from '@loopback/repository';

@model()
export class Count {

  @property({
    type: 'number',
    required: true,
  })
  count: number;

}
