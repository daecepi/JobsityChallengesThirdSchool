import { Injectable, HttpException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  /**
   * that validate if the user exists
   * @param username : contains the username for the user to authenticate
   * @param password : contains the password for the user to authenticate
   */
  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOne(username);

    if (!user[0] || !user[0].password) {
      throw new HttpException('Username or password wrong', 200);
    }

    //Taking the property password out of the object and returning it
    if (user && user[0].password === pass) {
      const {password, ...result } = user;
      return result;
    }else{
      return new HttpException("Username or password wrong", 200);
    }
  }

  /**
   * This funtion gives a token (signed by jwt) to the user that has the right credentials
   * @param user : a variable that contains the user you want to log in
   */
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
      user: user[0], //User object without the password to update UI and further operations like lending in the future
    };
  }
}
