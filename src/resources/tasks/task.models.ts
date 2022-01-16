import { Board } from "../../entity/board.model";

interface CreateTask {
  title: string,
  order: number,
  description: string
}

interface UpdateTask {
  // userId: string | null,
  // boardId: string | Board,
  columnId: string,
  title: string,
  order: number,
  description: string,
}

export {
  CreateTask,
  UpdateTask
}