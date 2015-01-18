'use strict';

var Reflux = require('reflux');

var ProductActions = Reflux.createActions([
	"load",
	"save"
]);

module.exports.ProductActions = ProductActions;


var ProductStore = Reflux.createStore({
	productData: {},

	init: function() {
		this.listenTo(ProductActions.load, this.onLoad);
		// this.listenTo(ProductActions.save, this.onSave);
	},

	onLoad: function() {		
		this.productData = {
			name: '1026 DM',
			size: '0.5 x 1.0"',
			material: 'Matte BOPP',
			img: 'https://s3-us-west-1.amazonaws.com/durareadytest/1026DMt.jpg',
			description: '0.5 x 1.0&#34; small matte BOPP labels, 1000 labels per roll.'
		};
		var products = this.productData;		
		this.trigger(products);
	}

});

module.exports.ProductStore = ProductStore;
