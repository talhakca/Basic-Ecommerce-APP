import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Subscription } from 'rxjs';
import { RegisterService } from '../../services/register-service/register.service';
import { Register } from 'src/app/features/data-stores/auth-data-store/state/auth-data-store.actions';
import { CrudFormItem } from 'src/app/features/rappider/components/lib/utils';
import {
  EMAIL_REGISTER_CONFIG,
  REGISTER_CONFIG,
} from 'src/app/features/shared/configs';
import { pathDefinitions } from 'src/app/features/shared/definitions';
import { UsernameType } from 'src/app/features/auth/utils';

@Component({
  selector: 'rappider-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  /* register config */
  REGISTER_CONFIG = cloneDeep(REGISTER_CONFIG);

  /* username type (register type) */
  usernameType = UsernameType.Email;

  registerConfigItems: Array<CrudFormItem> = [];

  LOGIN_PATH = pathDefinitions.auth.loginPath;
  isLoading: boolean;
  subscriptions: Subscription[];

  /* form data for register */
  registerFormData: any;

  constructor(
    private store: Store<any>,
    private registerService: RegisterService
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit() {
    this.subscribeToData();
    this.registerConfigItems.forEach((element) => {
      this.REGISTER_CONFIG.items.push(element);
    });
    this.setUsernameType();
  }

  /**
   * sets username type
   *
   * @param {UsernameType} usernameType
   * @memberof RegisterComponent
   */
  setUsernameType() {
    /* Checks if email or phone number field added */
    if (
      !this.REGISTER_CONFIG.items.includes(
        EMAIL_REGISTER_CONFIG
      )
    ) {
      /* if not checks the usernameType and added to REGISTER_CONFIG */
      if (this.usernameType === UsernameType.Email) {
        this.REGISTER_CONFIG.items.push(EMAIL_REGISTER_CONFIG);
      }
    }
  }

  /**
   * Subscribe to all data
   *
   * @memberof RegisterComponent
   */
  subscribeToData() {
    this.subscriptions = [this.subscribeToAuthenticationLoading()];
  }

  subscribeToAuthenticationLoading() {
    return this.store
      .select((state) => state.auth.isLoading)
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
      });
  }

  /**
   * Register
   *
   * @param {*} userData
   * @memberof RegisterComponent
   */
  register(userData: any) {
    const user = this.registerService.createUserDataForRegister(
      userData,
      this.usernameType
    );
    this.store.dispatch(Register({ payload: { user } }));
  }
}
