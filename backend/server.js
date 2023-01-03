const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});