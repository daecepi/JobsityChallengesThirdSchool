import { Injectable, HttpException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService){

    }

    /**
     * that validate if the user exists
     * @param username : contains the username for the user to authenticate
     * @param password : contains the password for the user to authenticate
     */
    async validateUser(username:string, password: string){
        const user = await this.usersService.findOne(username);

        console.log("user");
        if (!user || !user[0].password) {
            throw new HttpException("User not found", 404);
        }

        //Taking the property password out of the object and returning it
        if (user && user[0].password === password) {
            const {password, ...result } = user;
            return result;
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
        };
    }
}
