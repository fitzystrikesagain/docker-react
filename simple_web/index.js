const express = require('express');

const app = express();

port = 8080

app.get('/', (req, res) => {
    res.send('Bye there');
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
