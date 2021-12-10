import { v4 as uuidV4 } from 'uuid';

class Board {
  id: string;

  title: string;

  columns: never[];

  constructor({
    id = uuidV4(),
    title = 'BOARD',
    columns  = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export { Board };