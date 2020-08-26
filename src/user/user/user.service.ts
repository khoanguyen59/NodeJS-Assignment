import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }

    async  findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }
    
    async  create(user: UserEntity): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }
    
    async update(user: UserEntity): Promise<UpdateResult> {
        return await this.userRepository.update(user.id, user);
    }
    
    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
}

