import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    auth(authDto: AuthDto): Promise<{
        token: string;
    } | undefined>;
}
