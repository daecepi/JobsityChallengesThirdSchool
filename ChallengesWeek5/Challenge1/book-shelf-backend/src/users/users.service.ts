import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];
    constructor(){
        this.users = [
            {
                userId: 1,
                user: 'max',
                password: 'maxter'
            },
            {
                userId: 2,
                user: 'meso',
                password: 'osem'
            },
            {
                userId: 3,
                user: 'michell',
                password: 'holamichelle'
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user=>user.user === username);
    }
}
