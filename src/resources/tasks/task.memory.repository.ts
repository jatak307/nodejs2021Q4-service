// import { Task } from './task.model';
import { Task } from '../../entity/task.model';
import { CreateTask, UpdateTask } from './task.models';

/**
 * This is an collection of data of type {@link Task}. At first it is empty collection
 */
// const tasksData: Map<string, Task> = new Map();

/**
 * Gets tasks from the database
 * @returns Array of {@link Task} or empty array
 */
async function getTasksArray(): Promise<Task[]> {
  const tasks = await Task.find();
  return tasks;
}

/**
 * Gets task from the database
 * @param id task ID
 * @returns Object of type {@link Task} or undefined
 */
async function getTask(id: string): Promise<Task | undefined> {
  const task = await Task.findOne(id);
  return task;
}

/**
 * Creates a new task and writes it to the database
 * @param obj object of type CreateTask
 * @returns Object of type {@link Task}
 */
async function createNewTask(obj: CreateTask): Promise<Task> {
  const task = Task.create(obj);
  await Task.save(task);
  return task;
}

/**
 * Updates task
 * @param id task ID
 * @param body object of type {@link UpdateTask  | UpdateTask interface}
 * @returns Object of type {@link Task} with changed properties
 */
async function updateTaskById(id: string, body: UpdateTask): Promise<Task | undefined> {
  await Task.update(id, {...body});
  const updatedTask: Task | undefined = await Task.findOne(id);
  return updatedTask;
}

/**
 * Removes the task with the specified ID from the database
 * @param id task ID
 */
async function deleteTaskById(id: string): Promise<void> {
  await Task.delete({id});
}

export { getTasksArray, getTask, createNewTask, updateTaskById, deleteTaskById };