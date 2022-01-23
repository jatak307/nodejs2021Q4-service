interface Columns {
  id: string,
  title: string,
  order: number,
}

interface CreateBoard {
  title: string,
  columns: Columns[],
}

interface UpdateBoard {
  title?: string,
  columns?: never[],
}


export {
  CreateBoard,
  UpdateBoard,
  Columns
}