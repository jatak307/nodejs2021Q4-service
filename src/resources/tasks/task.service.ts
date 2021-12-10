import { 
  getTasksArray, 
  getTask, 
  createNewTask, 
  updateTaskById, 
  deleteTaskById 
} from './task.memory.repository';
import { Task } from './task.model';
import { CreateTask, UpdateTask } from './task.models';

async function getAllTasks(): Promise<Task[]> {
  const allTasks: Task[] = await getTasksArray();
  return allTasks;
}

async function getTaskById(id: string): Promise<Task | undefined> {
  const task: Task | undefined = await getTask(id);
  return task;
}

async function createTask(data: CreateTask): Promise<Task> {
  const createdTask: Task = await createNewTask(data);
  return createdTask;
}

async function updateTask(id: string, body: UpdateTask): Promise<Task> {
  const oldTask: Task | undefined = await getTaskById(id);
  if (oldTask === undefined) throw new Error("Board not found");
  const taskData: UpdateTask = {
    title: body.title || oldTask.title,
    order: body.order || oldTask.order,
    description: body.description || oldTask.description,
    userId: oldTask.userId,
    boardId: body.boardId || oldTask.boardId,
    columnId: body.columnId || oldTask.columnId
  };
  const updatedTask: Task = await updateTaskById(id, taskData);
  return updatedTask;
}

async function deleteTask(id: string): Promise<void> {
  await deleteTaskById(id);
}

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };