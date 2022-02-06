import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    getAllUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    getUserByLogin(login: string): Promise<User | undefined>;
    createNewUser(user: CreateUserDto): Promise<User>;
    updateUser(id: string, user: UpdateUserDto): Promise<User | undefined>;
    deleteUser(id: string): Promise<void>;
}
