import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private usersService: UserService){}

    @Get()
    index(): Promise<UserEntity[]> {
      return this.usersService.findAll();
    }    

    @Post('create')
    async create(@Body() userData: UserEntity): Promise<any> {
      return this.usersService.create(userData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() userData: UserEntity): Promise<any> {
        userData.id = id;
        console.log('Update #' + userData.id)
        return this.usersService.update(userData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.usersService.delete(id);
    }  
}