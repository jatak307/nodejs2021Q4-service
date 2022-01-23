import path from 'path';
import { ConnectionOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Board } from '../entity/board.model';
import { Columns } from '../entity/column.model';
import { Task } from '../entity/task.model';
import { User } from '../entity/user.model';
import { config } from './config';

export default {
  type: 'postgres',
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT,
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [
    User,
    Board,
    Task,
    Columns
  ],
  migrationsRun: true,
  dropSchema: true,
  migrations: [path.join(__dirname, '../migration/**/*.ts')],
  cli: {
    "migrationsDir": "./src/migration",
  },
} as ConnectionOptions