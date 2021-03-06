var express = require("express");
var app = express();
var path = require("path");
const db = require('./queries');
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./data")));
app.get('/api/getAccounts', db.getAccounts);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './data/intro.html'));
	res.send('you are one');
});

const server = app.listen(port, () => {
    console.log('Express is working on port ${port}');
});
