import { Model, model, property } from '@loopback/repository';
import { UsernameType } from './username-type.enum';

@model()
export class Credentials extends Model {
  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  usernameType: UsernameType;

  constructor(data?: Partial<Credentials>) {
    super(data);
  }
}