import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    name: string,
    email: string,
    pass: string,
  ): Promise<{
    access_token: string;
    userId: number;
    name: string;
    email: string;
  }> {
    const user = await this.usersService.findOneByEmail(email);

    if (user?.email !== email || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
