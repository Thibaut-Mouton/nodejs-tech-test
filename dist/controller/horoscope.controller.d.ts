import { HoroscopeService } from '../service/horoscope.service';
export declare class HoroscopeController {
    private readonly horoscopeService;
    constructor(horoscopeService: HoroscopeService);
    getSignFromDate(date: string): string;
}
