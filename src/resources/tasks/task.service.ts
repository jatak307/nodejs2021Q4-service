import { 
  getTasksArray, 
  getTask, 
  createNewTask, 
  updateTaskById, 
  deleteTaskById 
} from './task.memory.repository';
import { CreateTask, UpdateTask } from './task.models';

const getAllTasks = async () => {
  const allTasks = await getTasksArray();
  return allTasks;
};

const getTaskById = async (id: string) => {
  const task = await getTask(id);
  return task;
};

const createTask = async (data: CreateTask) => {
  const createdTask = await createNewTask(data);
  return createdTask;
};

const updateTask = async (id: string, body: UpdateTask) => {
  const oldTask = await getTaskById(id);
  if (oldTask === undefined) throw new Error("Board not found");
  const taskData = {
    title: body.title || oldTask.title,
    order: body.order || oldTask.order,
    description: body.description || oldTask.description,
    userId: oldTask.userId,
    boardId: body.boardId || oldTask.boardId,
    columnId: body.columnId || oldTask.columnId
  };
  const updatedTask = await updateTaskById(id, taskData);
  return updatedTask;
};

const deleteTask = async (id: string) => {
  await deleteTaskById(id);
}

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };