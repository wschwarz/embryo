'use strict';

var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route handler={require('./index')} path="/">
		<DefaultRoute handler={require('./test')} />

		<Route name="/other" handler={require('./other')} />

		<NotFoundRoute handler={require('./404')}/>
	</Route>
);

module.exports = routes;