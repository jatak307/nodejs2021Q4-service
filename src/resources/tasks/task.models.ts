interface CreateTask {
  title: string,
  order: number,
  description: string
}

interface UpdateTask {
  userId: string | null,
  boardId: string,
  columnId: string | null,
  title: string,
  order: number,
  description: string,
}

export {
  CreateTask,
  UpdateTask
}