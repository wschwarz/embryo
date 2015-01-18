'use strict';

var React = require('react');
var Reflux = require('reflux');
var ProductStorePack = require('../stores/product');
var ProductActions = ProductStorePack.ProductActions;
var ProductStore = ProductStorePack.ProductStore;


var Other = React.createClass({
	mixins: [Reflux.listenTo(ProductStore, "loadProduct")],

	componentDidMount: function() {                        
        ProductActions.load();        
    },

    loadProduct: function(product) {    	
    	this.setState(product);
    },

    getInitialState: function() {
    	return {
    		name: '',
			size: '',
			material: '',
			img: '',
			description: ''
    	};
    },

	render: function() {		
		return (
			<div className="item-box">				
				<div className="item-details">
					<h4>{this.state.name}</h4>
					<span>{this.state.size}</span>
					<span>{this.state.material}</span>
				</div>
				<img className="item-img" src={this.state.img} />
				<div className="clearfix"></div>
				<span className="item-description">
					{this.state.description}
				</span>
				<button className="btn">Get Price</button>
			</div>
		);
	}
});

module.exports = Other;
