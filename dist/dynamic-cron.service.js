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
const nest_schedule_1 = require("nest-schedule");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let DynamicCronService = class DynamicCronService {
    constructor(schedule, appService) {
        this.schedule = schedule;
        this.appService = appService;
    }
    onModuleInit() {
        this.schedule.scheduleCronJob('custom_cron_job', '*/10 * * * *', () => {
            this.appService.getUSers().subscribe(data => {
                console.log('se ejecuto jobs users');
                if (data.data.success) {
                    this.sendUsersHubspot(data.data.contacts);
                }
            }, error => {
            });
            return false;
        });
    }
    sendUsersHubspot(data) {
        data.forEach((element) => {
            const dataContact = {
                "properties": [
                    {
                        "property": "email",
                        "value": `${element.number}@prueba.com`
                    },
                    {
                        "property": "firstname",
                        "value": element.name
                    },
                    {
                        "property": "website",
                        "value": "http://hubspot.com"
                    },
                    {
                        "property": "company",
                        "value": "Avalon"
                    },
                    {
                        "property": "company",
                        "value": "HubSpot"
                    },
                    {
                        "property": "phone",
                        "value": element.number
                    },
                    {
                        "property": "state",
                        "value": "MA"
                    },
                    {
                        "property": "zip",
                        "value": element.number
                    }
                ]
            };
            this.sendNewUsers(dataContact);
        });
    }
    sendNewUsers(data) {
        this.appService.sendNewContacts(data).subscribe(data2 => {
        }, error => {
        });
    }
};
DynamicCronService = __decorate([
    common_1.Injectable(),
    __param(0, nest_schedule_1.InjectSchedule()),
    __metadata("design:paramtypes", [nest_schedule_1.Schedule, app_service_1.AppService])
], DynamicCronService);
exports.DynamicCronService = DynamicCronService;
//# sourceMappingURL=dynamic-cron.service.js.map