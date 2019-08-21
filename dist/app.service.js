"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nest_schedule_1 = require("nest-schedule");
let AppService = class AppService {
    constructor(httpService, schedule) {
        this.httpService = httpService;
        this.schedule = schedule;
        this.encodeToken = '5da96d5fc0da61196a7d98aa844897b6';
        this.postHubspot = 'https://api.hubapi.com/contacts/v1/contact/?hapikey=22f714e0-2d9c-4b5e-a8b1-b3ba866481ce';
    }
    getHello() {
        return 'Hello World!';
    }
    getUSers() {
        const headersRequest = {
            'Sac-Api-Authorization': `${this.encodeToken}`,
        };
        return this.httpService.get('http://api.sac.digital/v1/client/contacts/list', { headers: headersRequest });
    }
    sendNewContacts(data) {
        const headersRequest2 = {
            'Content-Type': 'application/json'
        };
        return this.httpService.post(this.postHubspot, data, { headers: headersRequest2 });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(1, nest_schedule_1.InjectSchedule()),
    __metadata("design:paramtypes", [common_1.HttpService, nest_schedule_1.Schedule])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map