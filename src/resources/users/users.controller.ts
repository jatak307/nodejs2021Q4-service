import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getUsers(): Promise<User[]> {
    const allUsers = await this.usersService.getAllUsers();
    return allUsers;
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User | undefined> {
    const user = await this.usersService.getUserById(id);
    return user;
  }

  @Post()
  async createUser(@Body() createDto: CreateUserDto): Promise<Partial<User>> {
    const user: User = await this.usersService.createNewUser(createDto);
    const { id, name, login } = user;
    const responseBody: Partial<User> = { id, name, login };
    return responseBody;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateUserDto): Promise<User | undefined> {
    const updatedUser = await this.usersService.updateUser(id, updateDto);
    return updatedUser;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}
