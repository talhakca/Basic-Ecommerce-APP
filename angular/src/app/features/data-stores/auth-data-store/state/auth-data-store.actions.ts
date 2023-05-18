/* angular */
import { createAction, props } from '@ngrx/store';


/* action types */
export enum ActionTypes {
  GetTokenByCrendentials = '[AUTHDATASTORE] GetTokenByCrendentials',
  GetTokenByCrendentialsSuccessful = '[AUTHDATASTORE] GetTokenByCrendentialsSuccessful',
  GetTokenByCrendentialsFailure = '[AUTHDATASTORE] GetTokenByCrendentialsFailure',
  Logout = '[AUTHDATASTORE] Logout',
  LoginByToken = '[AUTHDATASTORE] LoginByToken',
  LoggedIn = '[AUTHDATASTORE] LoggedIn',
  LoginByTokenFailure = '[AUTHDATASTORE] LoginByTokenFailure',
  Register = '[AUTHDATASTORE] Register',
  RegisterSuccessful = '[AUTHDATASTORE] RegisterSuccessful',
  RegisterFailure = '[AUTHDATASTORE] RegisterFailure',
  SetUser = '[AUTHDATASTORE] SetUser',
  SetToken = '[AUTHDATASTORE] SetToken',
  ClearToken = '[AUTHDATASTORE] ClearToken',
  NavigateToLoginPage = '[AUTHDATASTORE] NavigateToLoginPage',
  NavigateToRegisterPage = '[AUTHDATASTORE] NavigateToRegisterPage',
}

/* actions */

export const GetTokenByCrendentials = createAction(
  ActionTypes.GetTokenByCrendentials,
  props<{ payload: any }>()
);

export const GetTokenByCrendentialsSuccessful = createAction(
  ActionTypes.GetTokenByCrendentialsSuccessful,
  props<{ payload: any }>()
);

export const GetTokenByCrendentialsFailure = createAction(
  ActionTypes.GetTokenByCrendentialsFailure
);

export const Logout = createAction(ActionTypes.Logout);

export const LoginByToken = createAction(
  ActionTypes.LoginByToken,
  props<{ payload: any }>()
);

export const LoggedIn = createAction(
  ActionTypes.LoggedIn,
  props<{ payload: any }>()
);

export const LoginByTokenFailure = createAction(
  ActionTypes.LoginByTokenFailure
);

export const Register = createAction(
  ActionTypes.Register,
  props<{ payload: any }>()
);

export const RegisterSuccessful = createAction(
  ActionTypes.RegisterSuccessful,
  props<{ payload: any }>()
);

export const RegisterFailure = createAction(ActionTypes.RegisterFailure);

export const SetUser = createAction(
  ActionTypes.SetUser,
  props<{ payload: any }>()
);

export const SetToken = createAction(
  ActionTypes.SetToken,
  props<{ payload: any }>()
);

export const ClearToken = createAction(ActionTypes.ClearToken);

export const NavigateToLoginPage = createAction(
  ActionTypes.NavigateToLoginPage
);

export const NavigateToRegisterPage = createAction(
  ActionTypes.NavigateToRegisterPage
);
