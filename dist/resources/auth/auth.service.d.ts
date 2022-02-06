import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UsersService);
    auth(credentials: AuthDto): Promise<{
        token: string;
    } | undefined>;
    private throwAnExeption;
    private getToken;
}
