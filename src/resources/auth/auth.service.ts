import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entity/user.entity';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userService: UsersService) { }

  // eslint-disable-next-line consistent-return
  async auth(credentials: AuthDto) {
    const { login, password } = credentials;
    const user = await this.userService.getUserByLogin(login);

    if (!login || !password) {
      this.throwAnExeption('Enter login end password!', HttpStatus.UNAUTHORIZED);
    }

    if (!user) {
      this.throwAnExeption('User with such credentials not found. Try again!', HttpStatus.FORBIDDEN);
    } else {
      return this.getToken(user);
    }
  }

  private throwAnExeption(message: string, status: number) {
    throw new HttpException(message, status);
  }

  private getToken(user: User): {
    token: string;
  } {
    const payload = { id: user.id, login: user.login };
    const token = this.jwtService.sign(payload);
    return { token };
  }
}
