import { createConnection } from 'typeorm';
import { createDatabase } from 'typeorm-extension';
import { config } from './common/config';
import { app } from './app';
import { logger } from './logging/log';
import { typeOrmConfig } from './common/ormconfig';

// createConnection(typeOrmConfig);
  // await createDatabase({ ifNotExist: true }, typeOrmConfig);

(async () => {
  await createConnection(typeOrmConfig);
})();

const { PORT } = config;

app.listen(PORT, () => 
  logger.info(`App is running on http://localhost:${PORT}`)
);
