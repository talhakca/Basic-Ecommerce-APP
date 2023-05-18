import { UserProfile } from '@loopback/security';

export interface TokenPayload extends UserProfile {
  userId: string;
  fullName: string;
  username: string;
  roles: string[];

  iat?: number; // automatically generating by jwt
  exp?: number; // automatically generating by jwt
}