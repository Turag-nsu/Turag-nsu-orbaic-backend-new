// Environment variable configuration
// export default {
//     MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/express-mongo',
//     PORT: process.env.PORT || 3000,
// }
require('dotenv').config();
module.exports = {
    MONGO_URI: process.env.MONGODB_URI,
}