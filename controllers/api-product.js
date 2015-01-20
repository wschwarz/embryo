'use strict';
var pg = require('pg');

module.exports = function(app) {

	//GET
	app.get('/api/product', function(req, res) {
		pg.connect(app.connectionString, function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query('SELECT * FROM products', function(err, result) {
	    		//call `done()` to release the client back to the pool
	    		done();
	    		if(err) {
	    			return console.error('error running query', err);
	    		}

	        	res.send({ products: result.rows });
	    	});
		});
	});

	//POST
	//PUT
	//DELETE
};