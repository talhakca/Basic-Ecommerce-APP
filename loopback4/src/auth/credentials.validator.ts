import * as isemail from 'isemail';
import { HttpErrors } from '@loopback/rest';
import { Credentials } from './credentials.model';
import { UsernameType } from './username-type.enum';

export function validateCredentials(credentials: Credentials) {
  // Validate Email
  if (credentials.usernameType === UsernameType.Email) {
    if (!isemail.validate(credentials.username)) {
      throw new HttpErrors.UnprocessableEntity('invalid email');
    }
  } else if (credentials.usernameType === UsernameType.PhoneNumber) {
    // check phone number
  }

  // Validate Password Length
  if (credentials.password.length < 3) {
    throw new HttpErrors.UnprocessableEntity(
      'password must be minimum 3 characters',
    );
  }
}
