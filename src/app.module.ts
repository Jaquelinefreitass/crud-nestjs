import { TasksModule } from './tasks/tasks.module';
import { TaskService } from './tasks/shared/task.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo'),
    TasksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }