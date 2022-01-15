import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

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
    User
  ]
};

export { typeOrmConfig };