import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HoroscopeService } from '../service/horoscope.service';

@Controller('horoscope')
@ApiTags('Horoscope')
export class HoroscopeController {
  constructor(private readonly horoscopeService: HoroscopeService) {}

  @Get('/:birthdayDate')
  public getSignFromDate(@Param('birthdayDate') date: string): string {
    return this.horoscopeService.getZodiacSign(date);
  }
}
