import { Injectable, HttpService} from '@nestjs/common';
import { map, flatMap, catchError } from 'rxjs/operators';
import { InjectSchedule, Schedule } from 'nest-schedule';

@Injectable()
export class AppService {
  encodeToken : string = '5da96d5fc0da61196a7d98aa844897b6';
  postHubspot : string = 'https://api.hubapi.com/contacts/v1/contact/?hapikey=22f714e0-2d9c-4b5e-a8b1-b3ba866481ce';
  constructor(private httpService: HttpService, @InjectSchedule() private readonly schedule: Schedule) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUSers(){
    const headersRequest = {
      'Sac-Api-Authorization': `${this.encodeToken}`,
  };

    return this.httpService.get('http://api.sac.digital/v1/client/contacts/list', {headers : headersRequest});
  }

  sendNewContacts(data: any){
    const headersRequest2 = {
      'Content-Type': 'application/json' 
 };
    return this.httpService.post(this.postHubspot, data, {headers : headersRequest2});
  }

}
