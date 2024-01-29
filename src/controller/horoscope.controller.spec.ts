import { Test, TestingModule } from '@nestjs/testing';
import { HoroscopeController } from './horoscope.controller';
import { HttpException } from '@nestjs/common';
import { HoroscopeService } from '../service/horoscope.service';

describe(HoroscopeController.name, () => {
  let appController: HoroscopeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HoroscopeController],
      providers: [HoroscopeService]
    }).compile();

    appController = app.get<HoroscopeController>(HoroscopeController);
  });

  describe(HoroscopeController.prototype.getSignFromDate, () => {
    it('should return an HttpException', () => {
      expect(() => {
        appController.getSignFromDate('data');
      }).toThrow(HttpException);
    });

    it('should return a correct result', () => {
      const result = appController.getSignFromDate('2024');
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });
  });
});
