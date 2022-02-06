import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entity/task.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [TypeOrmModule.forFeature([Task]), AuthModule],
})
export class TasksModule {}
