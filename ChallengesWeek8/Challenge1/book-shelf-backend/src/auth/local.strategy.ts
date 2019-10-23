import { Strategy } from 'passport-local';

import { PassportStrategy } from '@nestjs/passport';

import { Injectable, UnauthorizedException, HttpException } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      return new HttpException("No user with those credentials", 404);
    }
    return user;
  }
}