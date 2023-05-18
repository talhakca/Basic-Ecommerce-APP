import { inject } from '@loopback/context';
import { HttpErrors } from '@loopback/rest';
import { promisify } from 'util';
import { TokenService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { AuthServiceBindings, TokenServiceBindings } from '../bindings';
import { Credentials, TokenPayload } from '../auth';
import { User } from '../models';
import { IAuthService } from '.';

const jwt = require('jsonwebtoken');
const signAsync = promisify(jwt.sign);
const verifyAsync = promisify(jwt.verify);

export class JWTService implements TokenService {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SECRET)
    private jwtSecret: string,

    @inject(TokenServiceBindings.TOKEN_EXPIRES_IN)
    private jwtExpiresIn: string,

    @inject(AuthServiceBindings.AUTH_SERVICE)
    public authService: IAuthService<User, Credentials>
  ) { }

  async verifyToken(token: string): Promise<UserProfile> {
    if (!token) {
      throw new HttpErrors.Unauthorized(
        `Error verifying token : 'token' is null`,
      );
    }
    let tokenPayload: TokenPayload;
    try {
      // get token's payload
      tokenPayload = <TokenPayload>await verifyAsync(token, this.jwtSecret);
      // don't pick 'iat' and 'exp' fields
      delete tokenPayload.iat;
      delete tokenPayload.exp;
    } catch (error: any) {
      throw new HttpErrors.Unauthorized(
        `Error verifying token : ${error.message}`,
      );
    }
    return tokenPayload;
  }

  async generateToken(userProfile: UserProfile): Promise<string> {
    if (!userProfile) {
      throw new HttpErrors.Unauthorized(
        'Error generating token : userProfile is null',
      );
    }
    try {
      /* generate token */
      const token = await signAsync(
        userProfile,
        this.jwtSecret,
        {
          expiresIn: Number(this.jwtExpiresIn),
        }
      );
      return token;
    } catch (error) {
      throw new HttpErrors.Unauthorized(`Error encoding token: ${error}`);
    }
  }
}
