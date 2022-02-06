import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateHash } from '../../common/helpers/generate-hash';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) { }

  async getAllUsers(): Promise<User[]> {
    const allUsers = await this.userRepo.find();
    return allUsers;
  }

  async getUserById(id: string): Promise<User | undefined> {
    const user = await this.userRepo.findOne(id);
    return user;
  }

  async getUserByLogin(login: string): Promise<User | undefined> {
    const user = await this.userRepo.findOne({ login });
    return user;
  }

  async createNewUser(user: CreateUserDto): Promise<User> {
    const password = await generateHash(user.password);
    // eslint-disable-next-line no-param-reassign
    user.password = password;
    const newUser = this.userRepo.create({ ...user });
    await this.userRepo.save(newUser);
    return newUser;
  }

  async updateUser(id: string, user: UpdateUserDto): Promise<User | undefined> {
    const currentUser = await this.getUserById(id);
    if (currentUser !== undefined) {
      const password = await generateHash(currentUser.password);
      // eslint-disable-next-line no-param-reassign
      user.password = password;
    }
    await this.userRepo.update(id, user);
    const updatedUser = await this.getUserById(id);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepo.delete(id);
  }
}