var express = require('express');
var app = express();
var path = require('path');
const accQueries = require('./accountQueries');
const port = process.env.PORT || 4000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './data')));
app.get('/getAccounts', accQueries.getAccounts);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './data/intro.html'));
	res.send('you are one');
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Express is working on port ${port}`);
});
