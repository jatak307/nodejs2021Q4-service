import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

interface Config {
  PORT: number,
  NODE_ENV: string | undefined,
  MONGO_CONNECTION_STRING: string | undefined,
  JWT_SECRET_KEY: string | undefined,
  AUTH_MODE: boolean,
  LOG_LEVEL: string
}

enum LoggingLevels {
  'error' = 0,
  'info' = 1,
  'http' = 2
}

const config: Config = {
  PORT: +(process.env.PORT || 4000),
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  LOG_LEVEL: LoggingLevels[2],
};

export { 
  Config,
  config 
};
