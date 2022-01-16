import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../common/error';
import { 
  getTasksArray, 
  getTask, 
  createNewTask, 
  updateTaskById, 
  deleteTaskById 
} from './task.memory.repository';
import { Task } from '../../entity/task.model';
import { CreateTask, UpdateTask } from './task.models';


/**
 * Waits to receive an array of tasks from the database
 * @returns a promise of an array of tasks
 */
async function getAllTasks(): Promise<Task[]> {
  const allTasks: Task[] = await getTasksArray();
  return allTasks;
}

/**
 * Waits to get the task by ID 
 * @param id task ID
 * @returns Task or undefined Promise
 */
async function getTaskById(id: string): Promise<Task | undefined> {
  const task: Task | undefined = await getTask(id);
  if (task === undefined) {
    throw new CustomError(
      StatusCodes.NOT_FOUND,
      `Task with ID ${id} not found`
    );
  }
  return task;
}

/**
 * Waits to create the task
 * @param body data for create task
 * @returns New Task Promise
 */
async function createTask(data: CreateTask): Promise<Task> {
  const createdTask: Task = await createNewTask(data);
  return createdTask;
}

/**
 * Waits to update the task by ID 
 * @param id task ID
 * @param body new data for this task
 * @returns Updated Task Promise
 */
async function updateTask(id: string, body: UpdateTask): Promise<Task | undefined> {
  const oldTask: Task | undefined = await getTaskById(id);
  if (oldTask === undefined) {
    throw new CustomError(
      StatusCodes.NOT_FOUND,
      `Task with ID ${id} not found`
    );
  }
  const taskData: UpdateTask = {
    title: body.title || oldTask.title,
    order: body.order || oldTask.order,
    description: body.description || oldTask.description,
    userId: oldTask.userId || null,
    boardId: body.boardId || oldTask.boardId,
    columnId: body.columnId || oldTask.columnId
  };
  const updatedTask: Task | undefined = await updateTaskById(id, taskData);
  return updatedTask;
}

/**
 * Waits to delete the task by ID
 * @param id task ID
 */
async function deleteTask(id: string): Promise<void> {
  // await getTask(id);
  await deleteTaskById(id);
}

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };