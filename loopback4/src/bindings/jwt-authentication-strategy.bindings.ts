import { BindingKey } from "@loopback/core";
import { AuthenticationStrategyOptions } from "../auth";

export namespace JWTAuthenticationStrategyBindings {
  export const DEFAULT_OPTIONS = BindingKey.create<AuthenticationStrategyOptions>('authentication.strategies.jwt.defaultoptions');
}