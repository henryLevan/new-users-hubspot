import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { json } from 'body-parser';
import { Cron, Interval, Timeout, NestSchedule } from 'nest-schedule';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}

}
