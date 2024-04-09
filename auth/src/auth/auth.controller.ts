import { Body, Controller, HttpException, HttpStatus, Post,  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpService } from '@nestjs/axios';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly httpService: HttpService) {}

  @Post()
  async check(@Body() body: any) { 
    try {
      const email = body.email;
      const user = await this.authService.check(email);
      return user;
    } catch (error) {
      throw new HttpException('Error checking authentication', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

