import {PassportStrategy} from '@nestjs/passport';

import {Strategy, ExtractJwt} from 'passport-jwt';

import { Injectable } from '@nestjs/common';

import { JwtConstants } from './constants';


@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: JwtConstants.secret
        });
    }

    async validate(payload: any){
        return {userId: payload.sub, username: payload.username};
    }
}