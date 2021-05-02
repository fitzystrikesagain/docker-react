const express = require('express');

const app = express();

port = 8889

app.get('/', (req, res) => {
    res.send('Hi there');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
