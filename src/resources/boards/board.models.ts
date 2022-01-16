import { Columns } from "../../entity/column.model";

interface Column {
  id: string,
  title: string,
  order: number,
}

interface CreateBoard {
  title: string,
  columns: Columns[] | null,
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