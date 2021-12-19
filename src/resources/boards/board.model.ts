import { v4 as uuidV4 } from 'uuid';

/**
 * This class sets the state for the board object
 */
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
}

export { Board };