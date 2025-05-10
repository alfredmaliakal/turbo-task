import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UseGuards } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('id') id: number, @Body('password') password: string) {
   
    console.log('Login request with id:', id);
   
    const user = await this.authService.validateUser(id, password);
  
    return await this.authService.login(user);

  }
}
