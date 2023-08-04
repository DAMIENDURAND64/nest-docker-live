import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers() {
    return await this.usersService.findAllUsers();
  }

  @Get(':id')
  async findUserById(id: number) {
    return await this.usersService.findUserById(id);
  }

  @Post()
  async createOneUser(user: User) {
    return await this.usersService.createOneUser(user);
  }

  @Put(':id')
  async updateOneUser(id: number, user: User) {
    return await this.usersService.updateOneUser(id, user);
  }

  @Delete(':id')
  async deleteOneUser(id: number) {
    return await this.usersService.deleteOneUser(id);
  }
}
