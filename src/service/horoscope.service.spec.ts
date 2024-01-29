import { HoroscopeService } from './horoscope.service';
import { HttpException } from '@nestjs/common';

describe(HoroscopeService.name, () => {
  let horoscopeService: HoroscopeService;

  beforeEach(() => {
    horoscopeService = new HoroscopeService();
  });

  describe(HoroscopeService.prototype.getZodiacSign, () => {
    it('Should return error if date is not valid', () => {
      const date = 'INVALID_DATE';
      expect(() => {
        horoscopeService.getZodiacSign(date);
      }).toThrow(HttpException);
    });

    it('Should return the correct zodiac sign', () => {
      const date = '2024-01-01';
      const result = horoscopeService.getZodiacSign(date);
      expect(result).toBe('You are Capricorn.');
    });
  });
});
