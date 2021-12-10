import { Task } from './task.model';
import { CreateTask, UpdateTask } from './task.models';

const tasksData: Map<string, Task> = new Map();

function getTasksArray(): Task[] {
  return [...tasksData.values()];
}

function getTask(id: string): Task | undefined {
  return tasksData.get(id);
}

function createNewTask(obj: CreateTask): Task {
  const task: Task = new Task(obj);
  tasksData.set(task.id, task);
  return task;
}

function updateTaskById(id: string, body: UpdateTask): Task {
  let updatedTask: Task | undefined = tasksData.get(id);
  updatedTask = { id, ...body };
  tasksData.set(id, updatedTask);
  return updatedTask;
}

function deleteTaskById(id: string): void {
  tasksData.delete(id);
}

export { getTasksArray, getTask, createNewTask, updateTaskById, deleteTaskById };