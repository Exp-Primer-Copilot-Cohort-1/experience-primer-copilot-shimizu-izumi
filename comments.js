// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body.comment);
    res.send(comments);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));