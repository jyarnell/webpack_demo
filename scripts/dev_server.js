const express = require('express');
const path = require('path');

const app = express()
let port = 3000
if (process.argv.length > 2) port = process.argv[2];

// app.get('/', (req, res) => res.send('Hello World!'));

// app.get(/^\/main.*\.js/, function (req, res) {
//     res.sendFile(req.path, { root: __dirname + "./../dist" });
// });

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function (req, res) {
//     res.sendFile('index.html', { root: __dirname + "./../public" });
// });

app.use(express.static(path.join(__dirname, './../dist')));
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname + "./../dist" });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))