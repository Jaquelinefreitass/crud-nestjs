import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schema';
import { TaskService } from './shared/task.service';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Task', schema: TaskSchema
        }])
    ],
    controllers: [
        TasksController
    ],
    providers: [
        TaskService
    ],
})
export class TasksModule { }
