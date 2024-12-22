// Environment variable configuration
require('dotenv').config();
module.exports = {
    MONGO_URI: process.env.MONGODB_URI,
    EXTERNAL_SERVER_URL: "https://app.orbaic.com",
    PORT: process.env.PORT || 3000,
}