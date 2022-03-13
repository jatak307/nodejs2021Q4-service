import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const headers = request.headers.authorization;

    if (!headers) {
      throw new UnauthorizedException();
    }
    const token = headers.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      this.jwtService.verify(token);
      return true;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
