import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Board } from '../entity/board.model';
import { Columns } from '../entity/column.model';
import { Task } from '../entity/task.model';

import { User } from '../entity/user.model';

const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [
    User,
    Board,
    Task,
    Columns
  ]
};

export { typeOrmConfig };