const {client} = require('./connection/dbClient');

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