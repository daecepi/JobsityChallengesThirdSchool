import { Controller, Post, Body, Inject, Param, HttpException } from '@nestjs/common';
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
        //Check for username already in use
        let userExistence = await this.userService.findOne(username);
        console.log(userExistence);
        if(userExistence[0]){ 
            return new HttpException('Username if already in use', 200);
        }

        //Add the user if not
        let result = await this.userService.insertUser({identification, name, lname, username, password, age, email});
        return result;
    }
}
