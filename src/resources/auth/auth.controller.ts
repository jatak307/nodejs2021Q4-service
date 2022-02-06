import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post()
  async auth(@Body() authDto: AuthDto) {
    const tokenObj = await this.authService.auth(authDto);
    return tokenObj;
  }
}
