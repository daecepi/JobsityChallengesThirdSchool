import { Controller, Req, Body, Get, Post, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';


@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  getStarterRoute(@Body('username') id: string): string {
    return id;
  }

  /**
   * Authenticas user and returns the token
   * @param req : contains the authorization results
   */
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async loginUser(@Req() req: Request){
    console.log(req);
    return this.authService.login(req.user);
  }
}
