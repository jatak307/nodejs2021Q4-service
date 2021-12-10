import { Task } from './task.model';
import { CreateTask, UpdateTask } from './task.models';

const tasksData: Map<string, Task> = new Map();

const getTasksArray = () => [...tasksData.values()];

const getTask = (id: string) => tasksData.get(id);

const createNewTask = (obj: CreateTask) => {
  const task = new Task(obj);
  tasksData.set(task.id, task);
  return task;
};

const updateTaskById = (id: string, body: UpdateTask) => {
  let updatedTask = tasksData.get(id);
  updatedTask = { id, ...body };
  tasksData.set(id, updatedTask);
  return updatedTask;
};

const deleteTaskById = (id: string) => tasksData.delete(id);

export { getTasksArray, getTask, createNewTask, updateTaskById, deleteTaskById };