import { Model, model, property } from '@loopback/repository';
import { UsernameType } from './username-type.enum';

@model()
export class RegisterDTO extends Model {

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  usernameType: UsernameType;

  @property({
    type: 'string',
    required: false,
    jsonSchema: { nullable: true },
  })
  email?: string;

  @property({
    type: 'string',
    required: false,
    jsonSchema: { nullable: true },
  })
  phoneNumber?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  constructor(data?: Partial<RegisterDTO>) {
    super(data);
  }
}
