import { HttpErrors } from '@loopback/rest';
import { User } from '../models/user.model';
import { UserService } from '@loopback/authentication';
import { securityId, UserProfile } from '@loopback/security';
import { repository, Where } from '@loopback/repository';
import { inject } from '@loopback/context';
import { Credentials, RoleControlType, TokenPayload, UsernameType } from '../auth';
import { PasswordHasherBindings } from '../bindings';
import { UserRepository } from '../repositories';
import { PasswordHasher } from '.';

export interface IAuthService<M, T> extends UserService<M, T> {
  verifyAuthorization(
    tokenPayload: TokenPayload,
    requiredRoles: string[],
    roleControlType: RoleControlType
  ): Promise<boolean>;
}

export class AuthService implements IAuthService<User, Credentials> {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,

    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) { }

  /**
   * getting user by provided credentials
   *
   * @param {Credentials} credentials
   * @return {*}  {Promise<User>}
   * @memberof AuthService
   */
  async verifyCredentials(credentials: Credentials): Promise<User> {
    const invalidCredentialsError = 'Invalid username or password.';

    /* create where filter to get user */
    const whereFilter: Where<User> = {};

    /* set where filter to get user */
    switch (credentials.usernameType) {
      case UsernameType.Email:
        whereFilter.email = credentials.username;
        break;
      case UsernameType.PhoneNumber:
        whereFilter.phoneNumber = credentials.username;
        break;
    }

    const foundUser = await this.userRepository.findOne({ where: whereFilter });

    if (!foundUser) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    return foundUser;
  }

  async verifyAuthorization(tokenPayload: TokenPayload, requiredRoles: string[] = [], roleControlType: RoleControlType): Promise<boolean> {
    // checks if there is no any required role
    if (!requiredRoles?.length) {
      return true;
    } else if (!tokenPayload.roles?.length) {
      return false;
    }

    let isAuthorized = false;

    // getting user roles by token payload
    const userRoles: string[] = tokenPayload.roles || [];

    if (roleControlType === RoleControlType.Any) {
      isAuthorized = userRoles.some(userRole => requiredRoles.findIndex(requiredRole => requiredRole === userRole) !== -1);
    } else if (roleControlType === RoleControlType.All) {
      isAuthorized = userRoles.every(userRole => requiredRoles.findIndex(requiredRole => requiredRole === userRole) !== -1);
    }

    return isAuthorized;
  }

  /**
   * convert user data to token payload
   *
   * @param {User} user
   * @return {*}  {UserProfile}
   * @memberof AuthService
   */
  convertToUserProfile(user: User): UserProfile {
    return <TokenPayload>{
      fullName: `${user.firstName} ${user.middleName ? (user.middleName + ' ') : ''}${user.lastName}`,
      userId: user.id,
      roles: user.roles,
      username: user.username,
      [securityId]: user.id
    };
  }
}
