import { Controller, Get, Body, Inject } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor( private readonly userService: UsersService){

    }

    @Get('register')
    async getUser(
        @Body('identification') identification: string,
        @Body('user') user: string,
        @Body('username') username: string,
        @Body('password') password: string,
        @Body('age') age: number,
        @Body('email') email: string
    ){
        let result = await this.userService.registerUser({identification, user, username, password, age, email});
        return result;
    }
}
