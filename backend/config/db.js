const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Connected to MongoDB: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error.red);
        process.exit(1);
    }
}

module.exports = connectDB;