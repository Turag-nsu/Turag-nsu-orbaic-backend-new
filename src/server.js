// Server entry point
const { DBConfig } = require('./config/DBConfig');

// const connect = await DBConfig.connectDB();
//test db connection
// DBConfig.connectDB().then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB');
//     console.error(error.message);
// });
const cfg = new DBConfig.printURI();
cfg.connectDB().then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB');
    console.error(error.message);
});