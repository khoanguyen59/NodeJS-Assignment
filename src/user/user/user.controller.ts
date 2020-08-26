import { Controller, Get } from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private usersService: UserService){}

    @Get()
    index(): Promise<UserEntity[]> {
      return this.usersService.findAll();
    }    
}