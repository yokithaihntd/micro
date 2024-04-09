import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { SubService } from './sub.service';

@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Get(':id')
  async check(@Param('id') id: number) {
    try {
      const user = await this.subService.check(id);
      return user;
    } catch (error) {
      throw new HttpException('Error checking authentication', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
