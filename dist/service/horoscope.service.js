"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoroscopeService = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const horoscope_1 = require("horoscope");
let HoroscopeService = class HoroscopeService {
    getZodiacSign(date) {
        const receivedDate = new Date(date);
        const isDateValid = (0, date_fns_1.isValid)(new Date(date));
        if (!isDateValid) {
            throw new common_1.HttpException('Date is not valid', 400);
        }
        const month = (0, date_fns_1.getMonth)(receivedDate);
        const day = (0, date_fns_1.getDay)(receivedDate);
        const sign = (0, horoscope_1.getSign)({ month: month + 1, day });
        return `Your are ${sign}.`;
    }
};
HoroscopeService = __decorate([
    (0, common_1.Injectable)()
], HoroscopeService);
exports.HoroscopeService = HoroscopeService;
//# sourceMappingURL=horoscope.service.js.map