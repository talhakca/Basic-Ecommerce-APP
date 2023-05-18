import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import { MySequence } from './sequence';
import path from 'path';
import dotenv from 'dotenv';

import { AuthenticationComponent, registerAuthenticationStrategy } from '@loopback/authentication';
import { AuthServiceBindings, JWTAuthenticationStrategyBindings, PasswordHasherBindings, TokenServiceBindings } from './bindings';
import { AuthService, BcryptHasher, JWTService } from './services';
import { defaultAuthenticationStrategyOptions, JWTAuthenticationStrategy, AuthenticationSequence } from './auth';
import { PASSWORD_SALTING_ROUNDS, TOKEN_EXPIRES_IN_VALUE, TOKEN_SECRET_VALUE } from './definitions';
export { ApplicationConfig };

export class ELearningApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // setup environment variables
    dotenv.config();

    // setup default home page
    this.static('/', path.join(__dirname, '../public'));
    this.static('/redoc', path.join(__dirname, '../public/redoc.html'));

    // customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    /* authentication */
    this.setupAuthentication();
    /* set up the custom sequence */
    this.sequence(MySequence);
  }

  /* authentication */
  setupAuthentication() {
    this.bind(TokenServiceBindings.TOKEN_SECRET).to(TOKEN_SECRET_VALUE);

    this.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to(TOKEN_EXPIRES_IN_VALUE);

    this.bind(TokenServiceBindings.TOKEN_SERVICE).toClass(JWTService);

    // Bind bcrypt hash services
    this.bind(PasswordHasherBindings.ROUNDS).to(PASSWORD_SALTING_ROUNDS);
    this.bind(PasswordHasherBindings.PASSWORD_HASHER).toClass(BcryptHasher);

    this.bind(AuthServiceBindings.AUTH_SERVICE).toClass(AuthService);

    this.bind(JWTAuthenticationStrategyBindings.DEFAULT_OPTIONS).to(defaultAuthenticationStrategyOptions);

    // authentication implementation
    this.component(AuthenticationComponent);

    // JWT authentication & authorization implementation
    registerAuthenticationStrategy(this, JWTAuthenticationStrategy);

    // setup the authentication sequence
    this.sequence(AuthenticationSequence);
    }
}
