import { v4 as uuidV4 } from 'uuid';

/**
 * This class sets the state and behavior for the task object
 */
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

  /**
 * This method overwrites the userId for the class instance
 * @param newUserID id of the user to whom the instance of the class should be assigned. Default null
 */
  public setUser(newUserID = null): void {
    this.userId = newUserID;
  }
}

export { Task };
