import { Injectable } from '@angular/core';
import { PHONE_NUMBER_CLEANSE_REGEX } from 'src/app/features/shared/definitions';
import { UsernameType } from 'src/app/features/auth/utils';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}

  /**
   * replaces phone number. '(222) 222-2222' => '2222222222'
   *
   * @param {string} phoneNumber
   * @returns
   * @memberof RegisterComponent
   */
  cleansePhoneNumber(phoneNumber: string) {
    if (phoneNumber) {
      return phoneNumber.replace(PHONE_NUMBER_CLEANSE_REGEX, '');
    }
  }

  /**
   * create user data for register
   *
   * @param {any} userData
   * @returns
   * @memberof RegisterComponent
   */
  createUserDataForRegister(userData: any, usernameType: UsernameType) {
    const user = {
      ...userData,
      usernameType /* set username type */,
    };
    delete user.privacyPolicy;
    delete user.confirmPassword;
    return user;
  }
}
