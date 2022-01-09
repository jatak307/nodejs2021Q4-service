interface Column {
  id: string,
  title: string,
  order: number,
}

interface CreateBoard {
  title: string,
  columns: never[],
}

interface UpdateBoard {
  title?: string,
  columns?: never[],
}

export {
  CreateBoard,
  UpdateBoard,
  Column
}