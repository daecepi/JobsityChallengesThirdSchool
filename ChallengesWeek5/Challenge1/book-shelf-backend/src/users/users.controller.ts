import { Controller, Post, Body, Inject, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor( private readonly userService: UsersService){

    }

    @Post('register')
    async getUser(
        @Body('identification') identification: string,
        @Body('name') name: string,
        @Body('lname') lname: string,
        @Body('username') username: string,
        @Body('password') password: string,
        @Body('age') age: number,
        @Body('email') email: string
    ){
        console.log(identification, name, lname, username, password, age, email)
        let result = await this.userService.insertUser({identification, name, lname, username, password, age, email});
        return result;
    }
}
