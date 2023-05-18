import { TaskService } from './tasks/shared/task.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    TaskService, AppService],
})
export class AppModule { }
