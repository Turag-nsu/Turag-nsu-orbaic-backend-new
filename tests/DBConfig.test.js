const mongoose = require('mongoose');
const DBConfig = require('../src/config/DBConfig');

jest.mock('mongoose', () => ({
  connect: jest.fn(),
}));

describe('DBConfig.connectDB', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should connect to the database successfully', async () => {
    mongoose.connect.mockResolvedValueOnce(); // Simulate successful connection
    await expect(DBConfig.connectDB()).resolves.not.toThrow();
    expect(mongoose.connect).toHaveBeenCalledTimes(1); // Ensure it's called once
  });

  it('should throw an error when connection fails', async () => {
    mongoose.connect.mockRejectedValueOnce(new Error('Connection error')); // Simulate failure
    await expect(DBConfig.connectDB()).rejects.toThrow('Connection error');
    expect(mongoose.connect).toHaveBeenCalledTimes(1); // Ensure it's called once
  });
});
