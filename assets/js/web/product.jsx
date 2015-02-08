'use strict';

var React = require('react');
var Reflux = require('reflux');
var ProductStorePack = require('../stores/product');
var ProductActions = ProductStorePack.ProductActions;
var ProductStore = ProductStorePack.ProductStore;

var Product = React.createClass({
	mixins: [Reflux.listenTo(ProductStore, "loadProduct")],

	componentDidMount: function() {                        
        ProductActions.load();        
    },

    loadProduct: function(product) {    	
    	this.setState(product);
    },

    getInitialState: function() {
    	return { products: [] };
    },

	render: function() {
		return (
			<div className="container">
				<p>Simple database example</p>
				{ this.state.products.map(function(product) {
					return (
						<div className="item-box">				
							<div className="item-details">
								<h4>{product.name}</h4>
								<span>{product.size}</span>
								<span>{product.material}</span>
							</div>
							<img className="item-img" src={product.img} />
							<div className="clearfix"></div>
							<span className="item-description">
								{product.description}
							</span>
							<button className="btn">Get Price</button>
						</div>
					);
				})}
			</div>
		);
	}
});

module.exports = Product;
