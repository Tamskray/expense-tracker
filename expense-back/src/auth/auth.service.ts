import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    email: string,
    pass: string,
  ): Promise<{
    access_token: string;
    userId: number;
    username: string;
    email: string;
  }> {
    const user = await this.usersService.findOne(username);

    if (user?.email !== email || user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.userId,
      username: user.username,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user.userId,
      username: user.username,
      email: user.email,
    };
  }
}
