// Environment variable configuration
require('dotenv').config();
module.exports = {
    MONGO_URI: process.env.MONGODB_URI,
    EXTERNAL_SERVER_URL: "https://app.orbaic.com",
    PORT: process.env.PORT || 3000,
    LOGIN_REQUEST_BODY: process.env.LOGIN_REQUEST_BODY,
    LOGIN_METHOD: process.env.LOGIN_METHOD,
    LOGIN_URL: process.env.LOGIN_URL,
}