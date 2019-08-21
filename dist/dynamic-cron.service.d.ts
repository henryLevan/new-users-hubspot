import { Schedule } from 'nest-schedule';
import { OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
export declare class DynamicCronService implements OnModuleInit {
    private readonly schedule;
    private appService;
    constructor(schedule: Schedule, appService: AppService);
    onModuleInit(): any;
    sendUsersHubspot(data: []): void;
    sendNewUsers(data: any): void;
}
