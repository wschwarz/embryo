'use strict';

module.exports = function(app) {
	function loadProductInfo() {
		return {
			name: '1026 DM',
			size: '0.5 x 1.0"',
			material: 'Matte BOPP',
			img: 'https://s3-us-west-1.amazonaws.com/durareadytest/1026DMt.jpg',
			description: '0.5 x 1.0&#34; small matte BOPP labels, 1000 labels per roll.'
		};
	}

	app.get('/api/product', function(req, res) {
		res.send(loadProductInfo());
	});
};