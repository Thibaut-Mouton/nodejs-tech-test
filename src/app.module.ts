import { Module } from '@nestjs/common';
import { HoroscopeController } from './controller/horoscope.controller';
import { HoroscopeService } from './service/horoscope.service';

@Module({
  imports: [],
  controllers: [HoroscopeController],
  providers: [HoroscopeService],
})
export class AppModule {}
