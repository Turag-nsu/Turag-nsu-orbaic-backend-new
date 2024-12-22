// MongoDB connection setup
const { MONGO_URI } = require('./Env');
const mongoose = require('mongoose');

class DBConfig {
    static async connectDB() {
        try {
            await mongoose.connect(MONGO_URI);
            console.log('Connected to MongoDB');
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error.message);
            throw error; // Propagate the error
        }
    }
}

module.exports = DBConfig;