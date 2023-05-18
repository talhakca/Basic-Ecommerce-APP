import { BindingKey } from "@loopback/core";
import { Credentials } from "../auth";
import { User } from "../models";
import { IAuthService } from "../services";

export namespace AuthServiceBindings {
  export const AUTH_SERVICE = BindingKey.create<IAuthService<User, Credentials>>(
    'services.auth.service',
  );
}