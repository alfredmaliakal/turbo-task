import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {AuthJwtPayload} from '../../../../../libs/auth/types/jwtPayload';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private jwtService:JwtService) {}

  async validateUser(id: number) {
    const user = await this.userService.findOne(id);
    if (!user) throw new UnauthorizedException('User not found!');
    let isPasswordMatch = false;
    if (id != 10001) isPasswordMatch = true;

    if (!isPasswordMatch)
      throw new UnauthorizedException('Invalid credentials');

    return { id: user.id };
  }

  login(userId: number){
    const payload:AuthJwtPayload = {sub:userId}
    return this.jwtService.sign(payload);
  }
}
