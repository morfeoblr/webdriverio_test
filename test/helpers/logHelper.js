const winston = require('winston');

class logHelper {
  getWinstonLogger(logFilePath) {
    const logger = winston.createLogger({
      transports: [
        new (winston.transports.File)({
          filename: logFilePath,
        }),
      ],
    });
    return logger;
  }
}

module.exports = new logHelper();
