'use strict';


var React = require('React');
// var Test = require('./test');

var Other = React.createClass({
	render: function() {
		return (
			<div className="item-box">
				<div className="item-details">
					<h4>1026 DM</h4>
					<span>{'0.5 x 1.0"'}</span>
					<span>{'Matte BOPP'}</span>
				</div>
				<img className="item-img" src="https://s3-us-west-1.amazonaws.com/durareadytest/1026DMt.jpg" />
				<div className="clearfix"></div>
				<span className="item-description">
					{'0.5 x 1.0&#34; small matte BOPP labels, 1000 labels per roll.'}
				</span>
				<button className="btn">Get Price</button>
			</div>
		);
	}
});

module.exports = Other;
