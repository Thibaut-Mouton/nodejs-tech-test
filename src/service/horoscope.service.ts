import { HttpException, Injectable } from '@nestjs/common';
import { getDay, getMonth, isValid } from 'date-fns';
import { getSign } from 'horoscope';

@Injectable()
export class HoroscopeService {
  public getZodiacSign(date: string): string {
    const receivedDate = new Date(date);
    const isDateValid = isValid(new Date(date));
    if (!isDateValid) {
      throw new HttpException('Date is not valid', 400);
    }
    const month = getMonth(receivedDate);
    const day = getDay(receivedDate);
    const sign = getSign({ month: month + 1, day });
    return `You are ${sign}.`;
  }
}
