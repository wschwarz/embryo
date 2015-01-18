'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Index = React.createClass({
	render: function() {
		return (
			<div id="page">
				<nav className={"navbar navbar-inverse navbar-fixed-top"}>
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand" href="/">Base Project</a>
						</div>
						<div id="navbar" className={"collapse navbar-collapse"}>
							<ul className={"nav navbar-nav"}>
								<li className="active"><a href="/">Home</a></li>
								<li><a href="/contact">Contact</a></li>
							</ul>
						</div>
					</div>
			    </nav>
				<div id="main" className="container">
					<h1>Starter Project</h1>
					<main>
						<RouteHandler />
					</main>
				</div>
			</div>
		);
	}
});

module.exports = Index;