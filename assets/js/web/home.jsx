'use strict';

var React = require('react');


var Home = React.createClass({

	render: function() {
		return (
			<div id="test-react-component">
				<h4>here is a react component</h4>
				<p>This project uses the following:</p>
				<ul>
					<li>{'Node js'}</li>
					<li>express</li>
					<li>gulp</li>
					<li>webpack</li>
					<li>mocha</li>
					<li>react</li>
					<li>reflux</li>
					<li>less</li>
					<li>{'Bootstrap (styles)'}</li>
					<li>PostgreSQL</li>
				</ul>
				<p>
					{'It uses the react-router for front-end routing with the idea that the server side would serve as more of a data api. This is meant to be a base project to start with.'}
				</p>
				<a href="/product">Product example</a>
			</div>

		);
	}
});

module.exports = Home;
