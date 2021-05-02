const { Client } = require('pg');
var unload = require('unload');
var ret = unload.add(function(){
	if(client){
		client.end();
	}
});
 
ret.remove(); // removes the event-handler

const client = new Client({
	connectionString: process.env.DATABASE_URL,
  query_timeout: 2000, // number of milliseconds before a query call will timeout, default is no timeout
  connectionTimeoutMillis: 1000,
});
client.connect();

const getAccounts = (request, response) => {
	client.query('SELECT Id, Name, description, billingstreet, billingstate, billingcity, billingcountry,billingpostalcode FROM Salesforce.account', (error, result) => {
		if (error) {
			console.log(JSON.stringify(error));
			throw error;
		}
		response
			.status(201)
			.send(
                result.rows
			);
	});
};

module.exports = {
    getAccounts
}

