import { authenticate, TokenService } from '@loopback/authentication';
import { inject } from '@loopback/core';
import { repository } from '@loopback/repository';
import {
  post,
  get,
  requestBody,
  HttpErrors,
  getModelSchemaRef,
  response,
} from '@loopback/rest';
import { SecurityBindings } from '@loopback/security';
import { Credentials, TokenPayload, TokenDTO, RegisterDTO, UsernameType } from '../auth';
import { AuthServiceBindings, PasswordHasherBindings, TokenServiceBindings } from '../bindings';
import { User } from '../models';
import { UserRepository } from '../repositories';
import { IAuthService, PasswordHasher } from '../services';

export class AuthController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,

    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,

    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,

    @inject(AuthServiceBindings.AUTH_SERVICE)
    public authService: IAuthService<User, Credentials>
  ) { }

  @post('/auth/register')
  @response(200, {
    description: 'User model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TokenDTO),
      },
    },
  })
  async register(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegisterDTO)
        },
      },
    })
    registerBody: RegisterDTO
  ): Promise<TokenDTO> {
    // hash the password
    const hashedPassword = await this.passwordHasher.hashPassword(registerBody.password);

    /* set user data */
    const user = new User({
      firstName: registerBody.firstName,
      lastName: registerBody.lastName,
      password: hashedPassword
    });

    /* set user's username */
    switch (registerBody.usernameType) {
      case UsernameType.Email:
        user.username = registerBody.email!; /* set username */
        user.email = registerBody.email!; /* set email */
        break;
      case UsernameType.PhoneNumber:
        user.username = registerBody.phoneNumber!; /* set username */
        user.phoneNumber = registerBody.phoneNumber!; /* set phone number */
        break;
      default:
        break;
    }

    try {
      // create the new user
      const savedUser = await this.userRepository.create(user);

      // convert a User object into a TokenPayload object (reduced set of properties)
      const tokenPayload = <TokenPayload>(
        this.authService.convertToUserProfile(savedUser)
      );

      // create a JSON Web Token based on the user profile
      const token = await this.jwtService.generateToken(tokenPayload);

      return new TokenDTO({ token });
    } catch (error: any) {
      // MongoError 11000 duplicate key
      if (error.code === 11000) {
        throw new HttpErrors.Conflict();
      } else {
        throw error;
      }
    }
  }

  @post('/auth/login')
  @response(200, {
    description: 'User model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TokenDTO),
      },
    },
  })
  async login(
    @requestBody({
      description: 'The input of login function',
      required: true,
      content: {
        'application/json': {
          schema: getModelSchemaRef(Credentials)
        },
      },
    })
    credentials: Credentials): Promise<TokenDTO> {
    // ensure the user exists, and the password is correct
    const user = await this.authService.verifyCredentials(credentials);

    // convert a User object into a TokenPayload object (reduced set of properties)
    const tokenPayload = <TokenPayload>this.authService.convertToUserProfile(user);

    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(tokenPayload);

    return new TokenDTO({ token });
  }

  @authenticate({ strategy: 'jwt' })
  @get('/auth/get-user-by-token')
  @response(200, {
    description: 'User model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(User)
      }
    },
  })
  async getUserByToken(
    @inject(SecurityBindings.USER)
    tokenPayload: TokenPayload
  ): Promise<User> {
    const userId = tokenPayload.userId;
    const user = await this.userRepository.findById(userId, { include: [{ relation: 'cart' }] });
    return user;
  }

}
