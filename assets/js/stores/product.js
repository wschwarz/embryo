'use strict';

var Reflux = require('reflux');
var request = require('superagent');

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
		var cb = function (error, res) {			
			if (error) { console.error(error); }
			else {
				this.productData = JSON.parse(res.text);
				this.trigger(JSON.parse(res.text));
			}			
		};
		request.get('/api/product', cb.bind(this));
	}

});

module.exports.ProductStore = ProductStore;
