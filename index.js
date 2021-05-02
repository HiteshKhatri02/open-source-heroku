var express = require('express');
var app = express();
var path = require('path');
const accQueries = require('./data/accountQueries');
const port = process.env.PORT || 4000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));
app.post('/getAccounts', accQueries.createEmployee);


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './public/form.html'));
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Express is working on port ${port}`);
});
