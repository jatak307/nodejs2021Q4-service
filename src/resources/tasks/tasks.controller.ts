import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Task } from './entity/task.entity';
import { TasksService } from './tasks.service';

@Controller('boards')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get(':boardId/tasks')
  async getTasks(): Promise<Task[]> {
    const allTasks = await this.tasksService.getAllTasks();
    return allTasks;
  }

  @Get(':boardId/tasks/:id')
  async getTask(@Param('id') id: string): Promise<Task> {
    const task = await this.tasksService.getTaskById(id);
    return task;
  }

  @Post(':boardId/tasks')
  async createTask(@Param('boardId') boardId: string, @Body() createDto: CreateTaskDto): Promise<Partial<Task>> {
    const task: Task = await this.tasksService.createNewTask(boardId, createDto);
    return task;
  }

  @Put(':boardId/tasks/:id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateTaskDto): Promise<Task | undefined> {
    const updatedTask = await this.tasksService.updateTask(id, updateDto);
    return updatedTask;
  }

  @Delete(':boardId/tasks/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.tasksService.deleteTask(id);
  }
}
