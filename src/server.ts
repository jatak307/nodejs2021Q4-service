import "reflect-metadata";
import { createConnection } from 'typeorm';
import { config } from './common/config';
import { app } from './app';
import { logger } from './logging/log';
import ormconfig from './common/ormconfig';

(async () => {
  await createConnection(ormconfig);
  
  const { PORT } = config;

  app.listen(PORT, () => 
    logger.info(`App is running on http://localhost:${PORT}`)
  );
})();


