import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // login controller
  @Post('login')
  async login(@Body('id') id: number, @Body('password') password: string) {
    console.log('Login request with id:', id);

    // validates user based on id and password
    const user = await this.authService.validateUser(id, password);

    //returns user object and token as payload
    return await this.authService.login(user);
  }
}
