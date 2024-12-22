const { EXTERNAL_SERVER_URL } = require('./Env');

const ExternalServerConfig = {
  BASE_URL: EXTERNAL_SERVER_URL,
  TIMEOUT: 10000,
};

module.exports = ExternalServerConfig;
