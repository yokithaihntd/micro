import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): void {
    this.usersService.create(createUserDto);
  }

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(+id);
  }
}
