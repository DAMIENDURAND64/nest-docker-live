import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async findUserById(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } });
  }
  async createOneUser(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }
  async updateOneUser(id: number, user: User): Promise<User> {
    await this.usersRepository.update(id, user);
    return await this.usersRepository.findOne({ where: { id } });
  }
  async deleteOneUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
