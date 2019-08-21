import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from 'nest-schedule';
import { DynamicCronService } from './dynamic-cron.service'

@Module({
  imports: [HttpModule,
    ScheduleModule.register()],
  controllers: [AppController],
  providers: [AppService, DynamicCronService],
})
export class AppModule {}
