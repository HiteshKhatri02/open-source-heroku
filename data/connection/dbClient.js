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
	ssl: {
		rejectUnauthorized: false
  },
  query_timeout: 2000, // number of milliseconds before a query call will timeout, default is no timeout
  connectionTimeoutMillis: 1000,
});
client.connect();

module.exports = {
	client
};

