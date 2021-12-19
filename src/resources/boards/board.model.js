const { v4: uuidV4 } = require('uuid');

class Board {
  constructor({
    id = uuidV4(),
    title = 'BOARD',
    columns  = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;