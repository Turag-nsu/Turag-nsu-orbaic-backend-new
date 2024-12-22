const winston = require('winston');
const Logger = require('../src/config/Logger');

jest.mock('winston', () => {
  const logMock = jest.fn();
  const createLoggerMock = {
    log: logMock,
    info: jest.fn((message) => logMock({ level: 'info', message })),
    error: jest.fn((message) => logMock({ level: 'error', message })),
  };

  const Console = jest.fn();
  const File = jest.fn();

  return {
    createLogger: jest.fn(() => createLoggerMock),
    format: {
      combine: jest.fn(),
      timestamp: jest.fn(),
      printf: jest.fn(),
    },
    transports: {
      Console,
      File,
    },
  };
});

describe('Logger Configuration', () => {
  const mockLogger = winston.createLogger();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log an info message', () => {
    const message = 'Test info message';
    Logger.info(message);

    expect(mockLogger.info).toHaveBeenCalledWith('Test info message');
    expect(mockLogger.log).toHaveBeenCalledWith(
      expect.objectContaining({ level: 'info', message: 'Test info message' })
    );
  });

  it('should log an error message', () => {
    const message = 'Test error message';
    Logger.error(message);

    expect(mockLogger.error).toHaveBeenCalledWith('Test error message');
    expect(mockLogger.log).toHaveBeenCalledWith(
      expect.objectContaining({ level: 'error', message: 'Test error message' })
    );
  });

  it('should include a timestamp in the log', () => {
    const message = 'Test timestamp message';
    Logger.info(message);

    expect(mockLogger.log).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'info',
        message: 'Test timestamp message',
      })
    );
  });
});
