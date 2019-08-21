import { HttpService } from '@nestjs/common';
import { Schedule } from 'nest-schedule';
export declare class AppService {
    private httpService;
    private readonly schedule;
    encodeToken: string;
    postHubspot: string;
    constructor(httpService: HttpService, schedule: Schedule);
    getHello(): string;
    getUSers(): import("rxjs").Observable<import("axios").AxiosResponse<any>>;
    sendNewContacts(data: any): import("rxjs").Observable<import("axios").AxiosResponse<any>>;
}
