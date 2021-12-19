import { Task } from './task.model';
import { CreateTask, UpdateTask } from './task.models';

/**
 * This is an collection of data of type {@link Task}. At first it is empty collection
 */
const tasksData: Map<string, Task> = new Map();

/**
 * Gets tasks from the database
 * @returns Array of {@link Task} or empty array
 */
function getTasksArray(): Task[] {
  return [...tasksData.values()];
}

/**
 * Gets task from the database
 * @param id task ID
 * @returns Object of type {@link Task} or undefined
 */
function getTask(id: string): Task | undefined {
  return tasksData.get(id);
}

/**
 * Creates a new task and writes it to the database
 * @param obj object of type CreateTask
 * @returns Object of type {@link Task}
 */
function createNewTask(obj: CreateTask): Task {
  const task: Task = new Task(obj);
  tasksData.set(task.id, task);
  return task;
}

/**
 * Updates task
 * @param id task ID
 * @param body object of type {@link UpdateTask  | UpdateTask interface}
 * @returns Object of type {@link Task} with changed properties
 */
function updateTaskById(id: string, body: UpdateTask): Task {
  const updatedTask: Task | undefined = tasksData.get(id);
  if (updatedTask === undefined) throw new Error("Task not found");

  updatedTask.description = body.description;
  updatedTask.order = body.order;
  updatedTask.title = body.title;
  updatedTask.boardId = body.boardId;
  updatedTask.userId = body.userId;
  updatedTask.columnId = body.columnId;

  tasksData.set(id, updatedTask);
  return updatedTask;
}

/**
 * Removes the task with the specified ID from the database
 * @param id task ID
 */
function deleteTaskById(id: string): void {
  tasksData.delete(id);
}

export { getTasksArray, getTask, createNewTask, updateTaskById, deleteTaskById };