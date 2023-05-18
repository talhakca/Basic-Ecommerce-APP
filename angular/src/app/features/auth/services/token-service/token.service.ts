import { Injectable } from '@angular/core';
import { BrowserStorageManagementService } from '../../../shared/services';

const TOKEN_LOCALSTORAGE_KEY = 'Authorization';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    private browserStorageManagementService: BrowserStorageManagementService
  ) {}

  istokenExist(): boolean {
    return !!this.browserStorageManagementService.getLocalStorageItem(
      TOKEN_LOCALSTORAGE_KEY
    );
  }

  getToken(): string {
    return this.browserStorageManagementService.getLocalStorageItem(
      TOKEN_LOCALSTORAGE_KEY
    );
  }

  setToken(accessToken: string) {
    return this.browserStorageManagementService.setLocalStorageItem(
      TOKEN_LOCALSTORAGE_KEY,
      accessToken
    );
  }

  clearToken() {
    return this.browserStorageManagementService.removeLocalStorageItem(
      TOKEN_LOCALSTORAGE_KEY
    );
  }
}
