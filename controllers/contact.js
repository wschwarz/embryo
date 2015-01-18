'use strict';

module.exports = function(app) {
	
	app.get('/contact', function(req, res) {
		res.send('Contact me at wschwarz1986@gmail.com');
	});
};