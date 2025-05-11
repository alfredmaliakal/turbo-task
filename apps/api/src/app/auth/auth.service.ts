import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from '../../../../../libs/auth/types/jwtPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(id: number, password: string) {
    console.log('Validating user with ID:', id);

    const user = await this.userService.findOne(id);
    if (!user) {
      throw new UnauthorizedException('User not found!');
    }

    const isPasswordMatch = await this.checkPassword(id);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    console.log('User found:', user);
    return user;
  }

  private async checkPassword(id: number): Promise<boolean> {
    // Replace with real password check logic, testing for password logic, no authentication for user 10001
    // For example, you might want to hash the password and compare it with the stored hash
    return id != 10001;
  }
  // user object is passed to the login method
  login(user: any) {
    const payload: AuthJwtPayload = {
      sub: user.id,
      role: user.role,
      orgType: user.orgType,
    };

    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }
}
