'use strict';

var React = require('react');


var Test = React.createClass({

	render: function() {
		return (
			<div id="test-react-component">
				<h4>here is a react component</h4>
				<p>This project uses the following:</p>
				<ul>
					<li>{'Node with npm'}</li>
					<li>express</li>
					<li>gulp</li>
					<li>less</li>
					<li>react</li>
					<li>livereload</li>
					<li>webpack</li>
				</ul>
				<p>
					{'It uses the react-router for front-end routing with the idea that the server side would serve as more of a data api. This is meant to be a base project to start with.'}
				</p>
				<a href="/other">Product example</a>
			</div>

		);
	}
});

module.exports = Test;
