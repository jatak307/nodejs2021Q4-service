import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

interface Config {
  PORT: number,
  NODE_ENV: string | undefined,
  JWT_SECRET_KEY: string | undefined,
  AUTH_MODE: boolean,
  LOG_LEVEL: string,
  POSTGRES_PORT: number,
  POSTGRES_USER: string,
  POSTGRES_PASSWORD: string,
  POSTGRES_DB: string,
  POSTGRES_HOST: string,
}

enum LoggingLevels {
  'error' = 0,
  'info' = 1,
  'http' = 2
}

const config: Config = {
  PORT: +(process.env.PORT || 4000),
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  LOG_LEVEL: process.env.LOG_LEVEL || LoggingLevels[2],
  POSTGRES_PORT: +(process.env.POSTGRES_PORT || 5432),
  POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
  POSTGRES_DB: process.env.POSTGRES_DB || 'postgres',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'postgres',
};

export { 
  Config,
  config 
};
