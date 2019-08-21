
    
import { InjectSchedule, Schedule } from 'nest-schedule';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class DynamicCronService implements OnModuleInit {
  constructor(@InjectSchedule() private readonly schedule: Schedule, private appService : AppService) {}

  onModuleInit(): any {
    this.schedule.scheduleCronJob('custom_cron_job', '*/10 * * * *', () => {
        this.appService.getUSers().subscribe(data => {
            console.log('se ejecuto jobs users')
            if(data.data.success){
              this.sendUsersHubspot(data.data.contacts);
            }
            
          }, error => {
          })
      return false;
    });
  }

  sendUsersHubspot(data: []): void{

    data.forEach((element: any) => {

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
      }

      this.sendNewUsers(dataContact)
    })
  }
  sendNewUsers(data){
    this.appService.sendNewContacts(data).subscribe(data2 => {
    }, error => {
    })
  }
}