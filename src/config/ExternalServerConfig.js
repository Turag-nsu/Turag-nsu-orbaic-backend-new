const { EXTERNAL_SERVER_URL } = require('./Env');

const ExternalServerConfig = {
  BASE_URL: EXTERNAL_SERVER_URL,
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'PostmanRuntime/7.29.2',
},
  TIMEOUT: 10000,
};

module.exports = ExternalServerConfig;
