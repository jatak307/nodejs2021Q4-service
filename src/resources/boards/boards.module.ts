import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Task } from '../tasks/entity/task.entity';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Board } from './entity/board.entity';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
  imports: [TypeOrmModule.forFeature([Board, Task]), AuthModule],
})
export class BoardsModule {}
