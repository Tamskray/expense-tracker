import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
// import { AuthGuard } from './auth.guard';
// import { APP_GUARD } from '@nestjs/core';
// import { SetMetadata } from '@nestjs/common';

// export const IS_PUBLIC_KEY = 'isPublic';
// export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10m' },
    }),
  ],
  providers: [
    AuthService,
    // { provide: APP_GUARD, useClass: AuthGuard }
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
