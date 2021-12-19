const { v4: uuidV4 } = require('uuid');

class Task {
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

  static toResponse(task) {
    const { id, title, order, description } = task;
    return { id, title, order, description };
  }

  setUser(newUserID = null) {
    this.userId = newUserID;
  }
}

module.exports = Task;
