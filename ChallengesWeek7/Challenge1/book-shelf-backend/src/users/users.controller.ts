import { Controller, Post, Body, Inject, Param, HttpException, UseGuards, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { BooksService } from '../books/books.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService, private readonly booksService: BooksService) {}

  @Post('register')
  async getUser(
    @Body('identification') identification: string,
    @Body('name') name: string,
    @Body('lname') lname: string,
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('age') age: number,
    @Body('email') email: string,
  ) {
    //Check for username already in use
    let userExistence = await this.userService.findOne(username);

    if (userExistence[0]) {
      return new HttpException('Username is already in use', 200);
    }

    //Add the user if not
    let result = await this.userService.insertUser({
      identification,
      name,
      lname,
      username,
      password,
      age,
      email,
      favorites: [],
      readings: [],
      laterReadings: [],
    });
    return result;
  }

  /**
   * Endpoint to return a lent book by a user
   * @param bookId : holds the book's id
   * @param userId : holds the user's id
   */
  @UseGuards(AuthGuard('jwt'))
  @Put('/:userId/book/:bookId')
  async returnBook(@Param('userId') userId: string, @Param('bookId') bookId: string) {
    let result = await this.booksService.returnBook(bookId, userId);

    return result;
  }
}
