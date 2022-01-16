import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Board } from '../entity/board.model';
import { Columns } from '../entity/column.model';
import { Task } from '../entity/task.model';
import { User } from '../entity/user.model';
import { config } from './config';

const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT,
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
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