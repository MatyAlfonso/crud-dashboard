const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/giveaways', require('./routes/giveawayRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

// Server listening on port 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port.yellow}`.blue)
});