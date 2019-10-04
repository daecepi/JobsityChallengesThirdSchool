import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService){

    }

    async validateUser(username:string, password: string){
        const user = await this.usersService.findOne(username);
        if (user && user[0].password === password) {
            const {password, ...result } = user;
            return result;
        }
    }


    /**
     * This funtion gives a token to the user while in login
     * @param user : a variable that contains the user you want to log in
     */
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };

        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}
