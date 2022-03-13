import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<User[]>;
    getUser(id: string): Promise<User | undefined>;
    createUser(createDto: CreateUserDto): Promise<Partial<User>>;
    update(id: string, updateDto: UpdateUserDto): Promise<User | undefined>;
    delete(id: string): Promise<void>;
}
