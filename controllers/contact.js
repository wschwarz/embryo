'use strict';

module.exports = function(app) {
	
	//You can still use traditional routes and views alongside react if you wish
	app.get('/contact', function(req, res) {
		res.send('Contact me at wschwarz1986@gmail.com');
	});
};