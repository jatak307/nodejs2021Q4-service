import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Task } from './entity/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  async getAllTasks(): Promise<Task[]> {
    const allTasks = await this.taskRepo.find();
    return allTasks;
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepo.findOne(id);
    if (!task) {
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return task;
  }

  async createNewTask(boardId: string, createDto: CreateTaskDto): Promise<Task> {
    const task = createDto as Task;
    task.boardId = boardId;
    const newTask = this.taskRepo.create({ ...createDto });
    await this.taskRepo.save(newTask);
    return newTask;
  }

  async updateTask(id: string, task: UpdateTaskDto): Promise<Task | undefined> {
    await this.taskRepo.update(id, task);
    const updatedTask = await this.getTaskById(id);
    return updatedTask;
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskRepo.delete(id);
  }
}
