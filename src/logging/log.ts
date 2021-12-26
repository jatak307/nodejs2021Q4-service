import winston, { format } from 'winston';

const { combine, printf } = format;

const myFormat = printf(({message}) => `${message}`);
const myFormatLong = printf(({level, message, timestamp}) => `${timestamp} [${level}]: ${message}`);

const logger = winston.createLogger({
  format: combine(
    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss Z'}),
    myFormatLong
  ),
  transports: [
    new winston.transports.File({
      level: 'error',
      filename: './logs/errors.log',
    }),
    new winston.transports.File({
      level: 'info',
      filename: './logs/filelog.log'
    }),
    new winston.transports.File({
      level: 'http',
      filename: './logs/filelog.log'
    }),
    new winston.transports.Console({
      level: 'info',
      format: combine(
        myFormat
      )
    }),
  ],
  // exceptionHandlers: [
  //   new winston.transports.File({ filename: './logs/errors.log' })
  // ],
  exitOnError: false
});

export {
  logger
}