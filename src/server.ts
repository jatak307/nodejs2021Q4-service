import { createConnection } from 'typeorm';
import { config } from './common/config';
import { app } from './app';
import { logger } from './logging/log';
import { typeOrmConfig } from './common/ormconfig';

createConnection(typeOrmConfig);

const { PORT } = config;

app.listen(PORT, () => 
  logger.info(`App is running on http://localhost:${PORT}`)
);
