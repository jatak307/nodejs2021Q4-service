import { v4 as uuidV4 } from 'uuid';

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string;

  columnId: string | null;

  constructor({
    id = uuidV4(),
    title = 'Task 1',
    order = 1,
    description = 'Th first task',
    userId = 'User ID',
    boardId = 'Board ID',
    columnId = 'Column ID'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: Task) {
    const { id, title, order, description } = task;
    return { id, title, order, description };
  }

  // setUser(newUserID = null) {
  //   this.userId = newUserID;
  // }
}

export { Task };
