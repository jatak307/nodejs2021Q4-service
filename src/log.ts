import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: './logs/filelog-all.log',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json())
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: './logs/exceptions.log' })
  ]
});

export {
  logger
}