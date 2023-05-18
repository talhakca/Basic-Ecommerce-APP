import { inject, Getter } from '@loopback/context';
import { HttpErrors, Request } from '@loopback/rest';
import {
  AuthenticationStrategy,
  TokenService,
  AuthenticationBindings,
  AuthenticationMetadata
} from '@loopback/authentication';
import {
  AuthServiceBindings,
  JWTAuthenticationStrategyBindings,
  TokenServiceBindings
} from '../../bindings';
import {
  AuthenticationStrategyOptions,
  TokenPayload,
  Credentials
} from '..';
import { User } from '../../models';
import { IAuthService } from '../../services';


export class JWTAuthenticationStrategy implements AuthenticationStrategy {
  name = 'jwt';

  /* get default authentication strategy options */
  @inject(JWTAuthenticationStrategyBindings.DEFAULT_OPTIONS)
  defaultOptions: AuthenticationStrategyOptions;

  /* set authentication strategy options */
  options: AuthenticationStrategyOptions = {};

  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public tokenService: TokenService,

    @inject.getter(AuthenticationBindings.METADATA)
    readonly getMetaData: Getter<AuthenticationMetadata[]>,

    @inject(AuthServiceBindings.AUTH_SERVICE)
    public userService: IAuthService<User, Credentials>
  ) { }

  async authenticate(request: Request): Promise<TokenPayload> {
    await this.setAuthenticationOptions();
    const token = this.getAuthorizationHeaderValue(request);
    const tokenPayload = <TokenPayload>await this.tokenService.verifyToken(token);
    const isAuthorized = await this.userService.verifyAuthorization(tokenPayload, this.options.roles, this.options.roleControlType);
    if (isAuthorized) {
      return tokenPayload;
    } else {
      throw new HttpErrors.Unauthorized();
    }
  }

  async setAuthenticationOptions(): Promise<void> {
    const controllerMethodAuthenticationMetadata = (await this.getMetaData())?.[0];
    this.options = Object.assign(
      {},
      this.defaultOptions,
      controllerMethodAuthenticationMetadata.options
    );
  }

  getAuthorizationHeaderValue(request: Request): string {
    const authorizationHeaderValue = request.headers.authorization;
    if (!authorizationHeaderValue) {
      throw new HttpErrors.Unauthorized('Authorization header not found.');
    }
    return authorizationHeaderValue;
  }
}
