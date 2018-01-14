const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
 return res.send('hello from express');
});

console.log('hello from express')
app.listen(process.env.PORT || 8080);