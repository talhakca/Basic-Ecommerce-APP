import { Model, model, property } from '@loopback/repository';

@model()
export class TokenDTO extends Model {
  @property({
    type: 'string',
    required: true,
  })
  token: string;

  constructor(data?: Partial<TokenDTO>) {
    super(data);
  }
}