/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Router = __webpack_require__(3);
	var routes = __webpack_require__(2);

	Router.run(routes, Router.HistoryLocation, function (Handler) {
		React.render(React.createElement(Handler, null), document.getElementById('app'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Router = __webpack_require__(3);
	var Route = Router.Route;
	var Routes = Router.Routes;
	var DefaultRoute = Router.DefaultRoute;
	var NotFoundRoute = Router.NotFoundRoute;
	var Redirect = Router.Redirect;

	var routes = (
		React.createElement(Route, {handler: __webpack_require__(4), path: "/"}, 
			React.createElement(DefaultRoute, {handler: __webpack_require__(5)}), 

			React.createElement(Route, {name: "/other", handler: __webpack_require__(6)}), 

			React.createElement(NotFoundRoute, {handler: __webpack_require__(7)})
		)
	);

	module.exports = routes;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports.DefaultRoute = __webpack_require__(8);
	exports.Link = __webpack_require__(9);
	exports.NotFoundRoute = __webpack_require__(10);
	exports.Redirect = __webpack_require__(11);
	exports.Route = __webpack_require__(12);
	exports.RouteHandler = __webpack_require__(13);

	exports.HashLocation = __webpack_require__(14);
	exports.HistoryLocation = __webpack_require__(15);
	exports.RefreshLocation = __webpack_require__(16);

	exports.ImitateBrowserBehavior = __webpack_require__(17);
	exports.ScrollToTopBehavior = __webpack_require__(18);

	exports.Navigation = __webpack_require__(19);
	exports.State = __webpack_require__(20);

	exports.create = __webpack_require__(21);
	exports.run = __webpack_require__(22);

	exports.History = __webpack_require__(23);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Router = __webpack_require__(3);
	var RouteHandler = Router.RouteHandler;

	var Index = React.createClass({displayName: "Index",
		render: function() {
			return (
				React.createElement("div", {id: "page"}, 
					React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top"}, 
						React.createElement("div", {className: "container"}, 
							React.createElement("div", {className: "navbar-header"}, 
								React.createElement("a", {className: "navbar-brand", href: "/"}, "Base Project")
							), 
							React.createElement("div", {id: "navbar", className: "collapse navbar-collapse"}, 
								React.createElement("ul", {className: "nav navbar-nav"}, 
									React.createElement("li", {className: "active"}, React.createElement("a", {href: "/"}, "Home")), 
									React.createElement("li", null, React.createElement("a", {href: "/contact"}, "Contact"))
								)
							)
						)
				    ), 
					React.createElement("div", {id: "main", className: "container"}, 
						React.createElement("h1", null, "Starter Project"), 
						React.createElement("main", null, 
							React.createElement(RouteHandler, null)
						)
					)
				)
			);
		}
	});

	module.exports = Index;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);


	var Test = React.createClass({displayName: "Test",

		render: function() {
			return (
				React.createElement("div", {id: "test-react-component"}, 
					React.createElement("h4", null, "here is a react component"), 
					React.createElement("p", null, "This project uses the following:"), 
					React.createElement("ul", null, 
						React.createElement("li", null, 'Node with npm'), 
						React.createElement("li", null, "express"), 
						React.createElement("li", null, "gulp"), 
						React.createElement("li", null, "less"), 
						React.createElement("li", null, "react"), 
						React.createElement("li", null, "livereload"), 
						React.createElement("li", null, "webpack")
					), 
					React.createElement("p", null, 
						'It uses the react-router for front-end routing with the idea that the server side would serve as more of a data api. This is meant to be a base project to start with.'
					), 
					React.createElement("a", {href: "/other"}, "Product example")
				)

			);
		}
	});

	module.exports = Test;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Reflux = __webpack_require__(25);
	var ProductStorePack = __webpack_require__(24);
	var ProductActions = ProductStorePack.ProductActions;
	var ProductStore = ProductStorePack.ProductStore;

	var Other = React.createClass({displayName: "Other",
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
				React.createElement("div", {className: "item-box"}, 				
					React.createElement("div", {className: "item-details"}, 
						React.createElement("h4", null, this.state.name), 
						React.createElement("span", null, this.state.size), 
						React.createElement("span", null, this.state.material)
					), 
					React.createElement("img", {className: "item-img", src: this.state.img}), 
					React.createElement("div", {className: "clearfix"}), 
					React.createElement("span", {className: "item-description"}, 
						this.state.description
					), 
					React.createElement("button", {className: "btn"}, "Get Price")
				)
			);
		}
	});

	module.exports = Other;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Four04 = React.createClass({displayName: "Four04",

		render: function() {
			return (
				React.createElement("div", null, "404")
			);
		}

	});

	module.exports = Four04;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var FakeNode = __webpack_require__(26);
	var PropTypes = __webpack_require__(27);

	/**
	 * A <DefaultRoute> component is a special kind of <Route> that
	 * renders when its parent matches but none of its siblings do.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */
	var DefaultRoute = React.createClass({

	  displayName: 'DefaultRoute',

	  mixins: [ FakeNode ],

	  propTypes: {
	    name: React.PropTypes.string,
	    path: PropTypes.falsy,
	    handler: React.PropTypes.func.isRequired
	  }

	});

	module.exports = DefaultRoute;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var classSet = __webpack_require__(44);
	var assign = __webpack_require__(45);
	var Navigation = __webpack_require__(19);
	var State = __webpack_require__(20);

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} />
	 *
	 * In addition to params, links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
	 */
	var Link = React.createClass({

	  displayName: 'Link',

	  mixins: [ Navigation, State ],

	  propTypes: {
	    activeClassName: React.PropTypes.string.isRequired,
	    to: React.PropTypes.string.isRequired,
	    params: React.PropTypes.object,
	    query: React.PropTypes.object,
	    onClick: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      activeClassName: 'active'
	    };
	  },

	  handleClick: function (event) {
	    var allowTransition = true;
	    var clickResult;

	    if (this.props.onClick)
	      clickResult = this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event))
	      return;

	    if (clickResult === false || event.defaultPrevented === true)
	      allowTransition = false;

	    event.preventDefault();

	    if (allowTransition)
	      this.transitionTo(this.props.to, this.props.params, this.props.query);
	  },

	  /**
	   * Returns the value of the "href" attribute to use on the DOM element.
	   */
	  getHref: function () {
	    return this.makeHref(this.props.to, this.props.params, this.props.query);
	  },

	  /**
	   * Returns the value of the "class" attribute to use on the DOM element, which contains
	   * the value of the activeClassName property when this <Link> is active.
	   */
	  getClassName: function () {
	    var classNames = {};

	    if (this.props.className)
	      classNames[this.props.className] = true;

	    if (this.isActive(this.props.to, this.props.params, this.props.query))
	      classNames[this.props.activeClassName] = true;

	    return classSet(classNames);
	  },

	  render: function () {
	    var props = assign({}, this.props, {
	      href: this.getHref(),
	      className: this.getClassName(),
	      onClick: this.handleClick
	    });

	    return React.DOM.a(props, this.props.children);
	  }

	});

	module.exports = Link;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var FakeNode = __webpack_require__(26);
	var PropTypes = __webpack_require__(27);

	/**
	 * A <NotFoundRoute> is a special kind of <Route> that
	 * renders when the beginning of its parent's path matches
	 * but none of its siblings do, including any <DefaultRoute>.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */
	var NotFoundRoute = React.createClass({

	  displayName: 'NotFoundRoute',

	  mixins: [ FakeNode ],

	  propTypes: {
	    name: React.PropTypes.string,
	    path: PropTypes.falsy,
	    handler: React.PropTypes.func.isRequired
	  }

	});

	module.exports = NotFoundRoute;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var FakeNode = __webpack_require__(26);
	var PropTypes = __webpack_require__(27);

	/**
	 * A <Redirect> component is a special kind of <Route> that always
	 * redirects to another route when it matches.
	 */
	var Redirect = React.createClass({

	  displayName: 'Redirect',

	  mixins: [ FakeNode ],

	  propTypes: {
	    path: React.PropTypes.string,
	    from: React.PropTypes.string, // Alias for path.
	    to: React.PropTypes.string,
	    handler: PropTypes.falsy
	  }

	});

	module.exports = Redirect;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var FakeNode = __webpack_require__(26);

	/**
	 * <Route> components specify components that are rendered to the page when the
	 * URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 *
	 * The preferred way to configure a router is using JSX. The XML-like syntax is
	 * a great way to visualize how routes are laid out in an application.
	 *
	 *   var routes = [
	 *     <Route handler={App}>
	 *       <Route name="login" handler={Login}/>
	 *       <Route name="logout" handler={Logout}/>
	 *       <Route name="about" handler={About}/>
	 *     </Route>
	 *   ];
	 *   
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 *
	 * Handlers for Route components that contain children can render their active
	 * child route using a <RouteHandler> element.
	 *
	 *   var App = React.createClass({
	 *     render: function () {
	 *       return (
	 *         <div class="application">
	 *           <RouteHandler/>
	 *         </div>
	 *       );
	 *     }
	 *   });
	 */
	var Route = React.createClass({

	  displayName: 'Route',

	  mixins: [ FakeNode ],

	  propTypes: {
	    name: React.PropTypes.string,
	    path: React.PropTypes.string,
	    handler: React.PropTypes.func.isRequired,
	    ignoreScrollBehavior: React.PropTypes.bool
	  }

	});

	module.exports = Route;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var RouteHandlerMixin = __webpack_require__(28);

	/**
	 * A <RouteHandler> component renders the active child route handler
	 * when routes are nested.
	 */
	var RouteHandler = React.createClass({

	  displayName: 'RouteHandler',

	  mixins: [RouteHandlerMixin],

	  getDefaultProps: function () {
	    return {
	      ref: '__routeHandler__'
	    };
	  },

	  render: function () {
	    return this.getRouteHandler();
	  }

	});

	module.exports = RouteHandler;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var LocationActions = __webpack_require__(38);
	var History = __webpack_require__(23);
	var Path = __webpack_require__(29);

	/**
	 * Returns the current URL path from the `hash` portion of the URL, including
	 * query string.
	 */
	function getHashPath() {
	  return Path.decode(
	    // We can't use window.location.hash here because it's not
	    // consistent across browsers - Firefox will pre-decode it!
	    window.location.href.split('#')[1] || ''
	  );
	}

	var _actionType;

	function ensureSlash() {
	  var path = getHashPath();

	  if (path.charAt(0) === '/')
	    return true;

	  HashLocation.replace('/' + path);

	  return false;
	}

	var _changeListeners = [];

	function notifyChange(type) {
	  if (type === LocationActions.PUSH)
	    History.length += 1;

	  var change = {
	    path: getHashPath(),
	    type: type
	  };

	  _changeListeners.forEach(function (listener) {
	    listener(change);
	  });
	}

	var _isListening = false;

	function onHashChange() {
	  if (ensureSlash()) {
	    // If we don't have an _actionType then all we know is the hash
	    // changed. It was probably caused by the user clicking the Back
	    // button, but may have also been the Forward button or manual
	    // manipulation. So just guess 'pop'.
	    notifyChange(_actionType || LocationActions.POP);
	    _actionType = null;
	  }
	}

	/**
	 * A Location that uses `window.location.hash`.
	 */
	var HashLocation = {

	  addChangeListener: function (listener) {
	    _changeListeners.push(listener);

	    // Do this BEFORE listening for hashchange.
	    ensureSlash();

	    if (_isListening)
	      return;

	    if (window.addEventListener) {
	      window.addEventListener('hashchange', onHashChange, false);
	    } else {
	      window.attachEvent('onhashchange', onHashChange);
	    }

	    _isListening = true;
	  },

	  removeChangeListener: function(listener) {
	    for (var i = 0, l = _changeListeners.length; i < l; i ++) {
	      if (_changeListeners[i] === listener) {
	        _changeListeners.splice(i, 1);
	        break;
	      }
	    }

	    if (window.removeEventListener) {
	      window.removeEventListener('hashchange', onHashChange, false);
	    } else {
	      window.removeEvent('onhashchange', onHashChange);
	    }

	    if (_changeListeners.length === 0)
	      _isListening = false;
	  },



	  push: function (path) {
	    _actionType = LocationActions.PUSH;
	    window.location.hash = Path.encode(path);
	  },

	  replace: function (path) {
	    _actionType = LocationActions.REPLACE;
	    window.location.replace(window.location.pathname + '#' + Path.encode(path));
	  },

	  pop: function () {
	    _actionType = LocationActions.POP;
	    History.back();
	  },

	  getCurrentPath: getHashPath,

	  toString: function () {
	    return '<HashLocation>';
	  }

	};

	module.exports = HashLocation;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var LocationActions = __webpack_require__(38);
	var History = __webpack_require__(23);
	var Path = __webpack_require__(29);

	/**
	 * Returns the current URL path from `window.location`, including query string.
	 */
	function getWindowPath() {
	  return Path.decode(
	    window.location.pathname + window.location.search
	  );
	}

	var _changeListeners = [];

	function notifyChange(type) {
	  var change = {
	    path: getWindowPath(),
	    type: type
	  };

	  _changeListeners.forEach(function (listener) {
	    listener(change);
	  });
	}

	var _isListening = false;

	function onPopState() {
	  notifyChange(LocationActions.POP);
	}

	/**
	 * A Location that uses HTML5 history.
	 */
	var HistoryLocation = {

	  addChangeListener: function (listener) {
	    _changeListeners.push(listener);

	    if (_isListening)
	      return;

	    if (window.addEventListener) {
	      window.addEventListener('popstate', onPopState, false);
	    } else {
	      window.attachEvent('popstate', onPopState);
	    }

	    _isListening = true;
	  },

	  removeChangeListener: function(listener) {
	    for (var i = 0, l = _changeListeners.length; i < l; i ++) {
	      if (_changeListeners[i] === listener) {
	        _changeListeners.splice(i, 1);
	        break;
	      }
	    }

	    if (window.addEventListener) {
	      window.removeEventListener('popstate', onPopState);
	    } else {
	      window.removeEvent('popstate', onPopState);
	    }

	    if (_changeListeners.length === 0)
	      _isListening = false;
	  },



	  push: function (path) {
	    window.history.pushState({ path: path }, '', Path.encode(path));
	    History.length += 1;
	    notifyChange(LocationActions.PUSH);
	  },

	  replace: function (path) {
	    window.history.replaceState({ path: path }, '', Path.encode(path));
	    notifyChange(LocationActions.REPLACE);
	  },

	  pop: History.back,

	  getCurrentPath: getWindowPath,

	  toString: function () {
	    return '<HistoryLocation>';
	  }

	};

	module.exports = HistoryLocation;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var HistoryLocation = __webpack_require__(15);
	var History = __webpack_require__(23);
	var Path = __webpack_require__(29);

	/**
	 * A Location that uses full page refreshes. This is used as
	 * the fallback for HistoryLocation in browsers that do not
	 * support the HTML5 history API.
	 */
	var RefreshLocation = {

	  push: function (path) {
	    window.location = Path.encode(path);
	  },

	  replace: function (path) {
	    window.location.replace(Path.encode(path));
	  },

	  pop: History.back,

	  getCurrentPath: HistoryLocation.getCurrentPath,

	  toString: function () {
	    return '<RefreshLocation>';
	  }

	};

	module.exports = RefreshLocation;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var LocationActions = __webpack_require__(38);

	/**
	 * A scroll behavior that attempts to imitate the default behavior
	 * of modern browsers.
	 */
	var ImitateBrowserBehavior = {

	  updateScrollPosition: function (position, actionType) {
	    switch (actionType) {
	      case LocationActions.PUSH:
	      case LocationActions.REPLACE:
	        window.scrollTo(0, 0);
	        break;
	      case LocationActions.POP:
	        if (position) {
	          window.scrollTo(position.x, position.y);
	        } else {
	          window.scrollTo(0, 0);
	        }
	        break;
	    }
	  }

	};

	module.exports = ImitateBrowserBehavior;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A scroll behavior that always scrolls to the top of the page
	 * after a transition.
	 */
	var ScrollToTopBehavior = {

	  updateScrollPosition: function () {
	    window.scrollTo(0, 0);
	  }

	};

	module.exports = ScrollToTopBehavior;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Router.Navigation ],
	 *     handleClick: function (event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render: function () {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {

	  contextTypes: {
	    makePath: React.PropTypes.func.isRequired,
	    makeHref: React.PropTypes.func.isRequired,
	    transitionTo: React.PropTypes.func.isRequired,
	    replaceWith: React.PropTypes.func.isRequired,
	    goBack: React.PropTypes.func.isRequired
	  },

	  /**
	   * Returns an absolute URL path created from the given route
	   * name, URL parameters, and query values.
	   */
	  makePath: function (to, params, query) {
	    return this.context.makePath(to, params, query);
	  },

	  /**
	   * Returns a string that may safely be used as the href of a
	   * link to the route with the given name.
	   */
	  makeHref: function (to, params, query) {
	    return this.context.makeHref(to, params, query);
	  },

	  /**
	   * Transitions to the URL specified in the arguments by pushing
	   * a new URL onto the history stack.
	   */
	  transitionTo: function (to, params, query) {
	    this.context.transitionTo(to, params, query);
	  },

	  /**
	   * Transitions to the URL specified in the arguments by replacing
	   * the current URL in the history stack.
	   */
	  replaceWith: function (to, params, query) {
	    this.context.replaceWith(to, params, query);
	  },

	  /**
	   * Transitions to the previous URL.
	   */
	  goBack: function () {
	    this.context.goBack();
	  }

	};

	module.exports = Navigation;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ Router.State ],
	 *     render: function () {
	 *       var className = this.props.className;
	 *   
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *   
	 *       return React.DOM.a({ className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {

	  contextTypes: {
	    getCurrentPath: React.PropTypes.func.isRequired,
	    getCurrentRoutes: React.PropTypes.func.isRequired,
	    getCurrentPathname: React.PropTypes.func.isRequired,
	    getCurrentParams: React.PropTypes.func.isRequired,
	    getCurrentQuery: React.PropTypes.func.isRequired,
	    isActive: React.PropTypes.func.isRequired
	  },

	  /**
	   * Returns the current URL path.
	   */
	  getPath: function () {
	    return this.context.getCurrentPath();
	  },

	  /**
	   * Returns an array of the routes that are currently active.
	   */
	  getRoutes: function () {
	    return this.context.getCurrentRoutes();
	  },

	  /**
	   * Returns the current URL path without the query string.
	   */
	  getPathname: function () {
	    return this.context.getCurrentPathname();
	  },

	  /**
	   * Returns an object of the URL params that are currently active.
	   */
	  getParams: function () {
	    return this.context.getCurrentParams();
	  },

	  /**
	   * Returns an object of the query params that are currently active.
	   */
	  getQuery: function () {
	    return this.context.getCurrentQuery();
	  },

	  /**
	   * A helper method to determine if a given route, params, and query
	   * are active.
	   */
	  isActive: function (to, params, query) {
	    return this.context.isActive(to, params, query);
	  }

	};

	module.exports = State;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* jshint -W058 */
	var React = __webpack_require__(1);
	var warning = __webpack_require__(46);
	var invariant = __webpack_require__(47);
	var canUseDOM = __webpack_require__(48).canUseDOM;
	var ImitateBrowserBehavior = __webpack_require__(17);
	var RouteHandler = __webpack_require__(13);
	var LocationActions = __webpack_require__(38);
	var HashLocation = __webpack_require__(14);
	var HistoryLocation = __webpack_require__(15);
	var RefreshLocation = __webpack_require__(16);
	var NavigationContext = __webpack_require__(30);
	var StateContext = __webpack_require__(31);
	var Scrolling = __webpack_require__(32);
	var createRoutesFromChildren = __webpack_require__(33);
	var supportsHistory = __webpack_require__(34);
	var Transition = __webpack_require__(35);
	var PropTypes = __webpack_require__(27);
	var Redirect = __webpack_require__(36);
	var History = __webpack_require__(23);
	var Cancellation = __webpack_require__(37);
	var Path = __webpack_require__(29);

	/**
	 * The default location for new routers.
	 */
	var DEFAULT_LOCATION = canUseDOM ? HashLocation : '/';

	/**
	 * The default scroll behavior for new routers.
	 */
	var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

	/**
	 * The default error handler for new routers.
	 */
	function defaultErrorHandler(error) {
	  // Throw so we don't silently swallow async errors.
	  throw error; // This error probably originated in a transition hook.
	}

	/**
	 * The default aborted transition handler for new routers.
	 */
	function defaultAbortHandler(abortReason, location) {
	  if (typeof location === 'string')
	    throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

	  if (abortReason instanceof Cancellation) {
	    return;
	  } else if (abortReason instanceof Redirect) {
	    location.replace(this.makePath(abortReason.to, abortReason.params, abortReason.query));
	  } else {
	    location.pop();
	  }
	}

	function findMatch(pathname, routes, defaultRoute, notFoundRoute) {
	  var match, route, params;

	  for (var i = 0, len = routes.length; i < len; ++i) {
	    route = routes[i];

	    // Check the subtree first to find the most deeply-nested match.
	    match = findMatch(pathname, route.childRoutes, route.defaultRoute, route.notFoundRoute);

	    if (match != null) {
	      match.routes.unshift(route);
	      return match;
	    }

	    // No routes in the subtree matched, so check this route.
	    params = Path.extractParams(route.path, pathname);

	    if (params)
	      return createMatch(route, params);
	  }

	  // No routes matched, so try the default route if there is one.
	  if (defaultRoute && (params = Path.extractParams(defaultRoute.path, pathname)))
	    return createMatch(defaultRoute, params);

	  // Last attempt: does the "not found" route match?
	  if (notFoundRoute && (params = Path.extractParams(notFoundRoute.path, pathname)))
	    return createMatch(notFoundRoute, params);

	  return match;
	}

	function createMatch(route, params) {
	  return { routes: [ route ], params: params };
	}

	function hasProperties(object, properties) {
	  for (var propertyName in properties)
	    if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName])
	      return false;

	  return true;
	}

	function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
	  return routes.some(function (r) {
	    if (r !== route)
	      return false;

	    var paramNames = route.paramNames;
	    var paramName;

	    // Ensure that all params the route cares about did not change.
	    for (var i = 0, len = paramNames.length; i < len; ++i) {
	      paramName = paramNames[i];

	      if (nextParams[paramName] !== prevParams[paramName])
	        return false;
	    }

	    // Ensure the query hasn't changed.
	    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
	  });
	}

	/**
	 * Creates and returns a new router using the given options. A router
	 * is a ReactComponent class that knows how to react to changes in the
	 * URL and keep the contents of the page in sync.
	 *
	 * Options may be any of the following:
	 *
	 * - routes           (required) The route config
	 * - location         The location to use. Defaults to HashLocation when
	 *                    the DOM is available, "/" otherwise
	 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
	 *                    when the DOM is available, null otherwise
	 * - onError          A function that is used to handle errors
	 * - onAbort          A function that is used to handle aborted transitions
	 *
	 * When rendering in a server-side environment, the location should simply
	 * be the URL path that was used in the request, including the query string.
	 */
	function createRouter(options) {
	  options = options || {};

	  if (typeof options === 'function') {
	    options = { routes: options }; // Router.create(<Route>)
	  } else if (Array.isArray(options)) {
	    options = { routes: options }; // Router.create([ <Route>, <Route> ])
	  }

	  var routes = [];
	  var namedRoutes = {};
	  var components = [];
	  var location = options.location || DEFAULT_LOCATION;
	  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
	  var onError = options.onError || defaultErrorHandler;
	  var onAbort = options.onAbort || defaultAbortHandler;
	  var state = {};
	  var nextState = {};
	  var pendingTransition = null;

	  function updateState() {
	    state = nextState;
	    nextState = {};
	  }

	  if (typeof location === 'string') {
	    warning(
	      !canUseDOM || process.env.NODE_ENV === 'test',
	      'You should not use a static location in a DOM environment because ' +
	      'the router will not be kept in sync with the current URL'
	    );
	  } else {
	    invariant(
	      canUseDOM,
	      'You cannot use %s without a DOM',
	      location
	    );
	  }

	  // Automatically fall back to full page refreshes in
	  // browsers that don't support the HTML history API.
	  if (location === HistoryLocation && !supportsHistory())
	    location = RefreshLocation;

	  var router = React.createClass({

	    displayName: 'Router',

	    mixins: [ NavigationContext, StateContext, Scrolling ],

	    statics: {

	      defaultRoute: null,
	      notFoundRoute: null,

	      /**
	       * Adds routes to this router from the given children object (see ReactChildren).
	       */
	      addRoutes: function (children) {
	        routes.push.apply(routes, createRoutesFromChildren(children, this, namedRoutes));
	      },

	      /**
	       * Returns an absolute URL path created from the given route
	       * name, URL parameters, and query.
	       */
	      makePath: function (to, params, query) {
	        var path;
	        if (Path.isAbsolute(to)) {
	          path = Path.normalize(to);
	        } else {
	          var route = namedRoutes[to];

	          invariant(
	            route,
	            'Unable to find <Route name="%s">',
	            to
	          );

	          path = route.path;
	        }

	        return Path.withQuery(Path.injectParams(path, params), query);
	      },

	      /**
	       * Returns a string that may safely be used as the href of a link
	       * to the route with the given name, URL parameters, and query.
	       */
	      makeHref: function (to, params, query) {
	        var path = this.makePath(to, params, query);
	        return (location === HashLocation) ? '#' + path : path;
	      },

	      /**
	       * Transitions to the URL specified in the arguments by pushing
	       * a new URL onto the history stack.
	       */
	      transitionTo: function (to, params, query) {
	        invariant(
	          typeof location !== 'string',
	          'You cannot use transitionTo with a static location'
	        );

	        var path = this.makePath(to, params, query);

	        if (pendingTransition) {
	          // Replace so pending location does not stay in history.
	          location.replace(path);
	        } else {
	          location.push(path);
	        }
	      },

	      /**
	       * Transitions to the URL specified in the arguments by replacing
	       * the current URL in the history stack.
	       */
	      replaceWith: function (to, params, query) {
	        invariant(
	          typeof location !== 'string',
	          'You cannot use replaceWith with a static location'
	        );

	        location.replace(this.makePath(to, params, query));
	      },

	      /**
	       * Transitions to the previous URL if one is available. Returns true if the
	       * router was able to go back, false otherwise.
	       *
	       * Note: The router only tracks history entries in your application, not the
	       * current browser session, so you can safely call this function without guarding
	       * against sending the user back to some other site. However, when using
	       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
	       * don't support HTML5 history) this method will *always* send the client back
	       * because we cannot reliably track history length.
	       */
	      goBack: function () {
	        invariant(
	          typeof location !== 'string',
	          'You cannot use goBack with a static location'
	        );

	        if (History.length > 1 || location === RefreshLocation) {
	          location.pop();
	          return true;
	        }

	        warning(false, 'goBack() was ignored because there is no router history');

	        return false;
	      },

	      /**
	       * Performs a match of the given pathname against this router and returns an object
	       * with the { routes, params } that match. Returns null if no match can be made.
	       */
	      match: function (pathname) {
	        return findMatch(pathname, routes, this.defaultRoute, this.notFoundRoute) || null;
	      },

	      /**
	       * Performs a transition to the given path and calls callback(error, abortReason)
	       * when the transition is finished. If both arguments are null the router's state
	       * was updated. Otherwise the transition did not complete.
	       *
	       * In a transition, a router first determines which routes are involved by beginning
	       * with the current route, up the route tree to the first parent route that is shared
	       * with the destination route, and back down the tree to the destination route. The
	       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
	       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
	       * all route handlers we're transitioning to.
	       *
	       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
	       * transition. To resolve asynchronously, they may use transition.wait(promise). If no
	       * hooks wait, the transition is fully synchronous.
	       */
	      dispatch: function (path, action, callback) {
	        if (pendingTransition) {
	          pendingTransition.abort(new Cancellation);
	          pendingTransition = null;
	        }

	        var prevPath = state.path;
	        if (prevPath === path)
	          return; // Nothing to do!

	        // Record the scroll position as early as possible to
	        // get it before browsers try update it automatically.
	        if (prevPath && action !== LocationActions.REPLACE)
	          this.recordScrollPosition(prevPath);

	        var pathname = Path.withoutQuery(path);
	        var match = this.match(pathname);

	        warning(
	          match != null,
	          'No route matches path "%s". Make sure you have <Route path="%s"> somewhere in your routes',
	          path, path
	        );

	        if (match == null)
	          match = {};

	        var prevRoutes = state.routes || [];
	        var prevParams = state.params || {};
	        var prevQuery = state.query || {};

	        var nextRoutes = match.routes || [];
	        var nextParams = match.params || {};
	        var nextQuery = Path.extractQuery(path) || {};

	        var fromRoutes, toRoutes;
	        if (prevRoutes.length) {
	          fromRoutes = prevRoutes.filter(function (route) {
	            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });

	          toRoutes = nextRoutes.filter(function (route) {
	            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });
	        } else {
	          fromRoutes = [];
	          toRoutes = nextRoutes;
	        }

	        var transition = new Transition(path, this.replaceWith.bind(this, path));
	        pendingTransition = transition;

	        transition.from(fromRoutes, components, function (error) {
	          if (error || transition.isAborted)
	            return callback.call(router, error, transition);

	          transition.to(toRoutes, nextParams, nextQuery, function (error) {
	            if (error || transition.isAborted)
	              return callback.call(router, error, transition);

	            nextState.path = path;
	            nextState.action = action;
	            nextState.pathname = pathname;
	            nextState.routes = nextRoutes;
	            nextState.params = nextParams;
	            nextState.query = nextQuery;

	            callback.call(router, null, transition);
	          });
	        });
	      },

	      /**
	       * Starts this router and calls callback(router, state) when the route changes.
	       *
	       * If the router's location is static (i.e. a URL path in a server environment)
	       * the callback is called only once. Otherwise, the location should be one of the
	       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
	       */
	      run: function (callback) {
	        var dispatchHandler = function (error, transition) {
	          pendingTransition = null;

	          if (error) {
	            onError.call(router, error);
	          } else if (transition.isAborted) {
	            onAbort.call(router, transition.abortReason, location);
	          } else {
	            callback.call(router, router, nextState);
	          }
	        };

	        if (typeof location === 'string') {
	          router.dispatch(location, null, dispatchHandler);
	        } else {
	          // Listen for changes to the location.
	          var changeListener = function (change) {
	            router.dispatch(change.path, change.type, dispatchHandler);
	          };

	          if (location.addChangeListener)
	            location.addChangeListener(changeListener);

	          // Bootstrap using the current path.
	          router.dispatch(location.getCurrentPath(), null, dispatchHandler);
	        }
	      },

	      teardown: function() {
	        location.removeChangeListener(this.changeListener);
	      }

	    },

	    propTypes: {
	      children: PropTypes.falsy
	    },

	    getLocation: function () {
	      return location;
	    },

	    getScrollBehavior: function () {
	      return scrollBehavior;
	    },

	    getRouteAtDepth: function (depth) {
	      var routes = this.state.routes;
	      return routes && routes[depth];
	    },

	    getRouteComponents: function () {
	      return components;
	    },

	    getInitialState: function () {
	      updateState();
	      return state;
	    },

	    componentWillReceiveProps: function () {
	      updateState();
	      this.setState(state);
	    },

	    componentWillUnmount: function() {
	      router.teardown();
	    },

	    render: function () {
	      return this.getRouteAtDepth(0) ? React.createElement(RouteHandler, this.props) : null;
	    },

	    childContextTypes: {
	      getRouteAtDepth: React.PropTypes.func.isRequired,
	      getRouteComponents: React.PropTypes.func.isRequired,
	      routeHandlers: React.PropTypes.array.isRequired
	    },

	    getChildContext: function () {
	      return {
	        getRouteComponents: this.getRouteComponents,
	        getRouteAtDepth: this.getRouteAtDepth,
	        routeHandlers: [ this ]
	      };
	    }

	  });

	  if (options.routes)
	    router.addRoutes(options.routes);

	  return router;
	}

	module.exports = createRouter;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var createRouter = __webpack_require__(21);

	/**
	 * A high-level convenience method that creates, configures, and
	 * runs a router in one shot. The method signature is:
	 *
	 *   Router.run(routes[, location ], callback);
	 *
	 * Using `window.location.hash` to manage the URL, you could do:
	 *
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 * 
	 * Using HTML5 history and a custom "cursor" prop:
	 * 
	 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
	 *     React.render(<Handler cursor={cursor}/>, document.body);
	 *   });
	 *
	 * Returns the newly created router.
	 *
	 * Note: If you need to specify further options for your router such
	 * as error/abort handling or custom scroll behavior, use Router.create
	 * instead.
	 *
	 *   var router = Router.create(options);
	 *   router.run(function (Handler) {
	 *     // ...
	 *   });
	 */
	function runRouter(routes, location, callback) {
	  if (typeof location === 'function') {
	    callback = location;
	    location = null;
	  }

	  var router = createRouter({
	    routes: routes,
	    location: location
	  });

	  router.run(callback);

	  return router;
	}

	module.exports = runRouter;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(47);
	var canUseDOM = __webpack_require__(48).canUseDOM;

	var History = {

	  /**
	   * Sends the browser back one entry in the history.
	   */
	  back: function () {
	    invariant(
	      canUseDOM,
	      'Cannot use History.back without a DOM'
	    );

	    // Do this first so that History.length will
	    // be accurate in location change listeners.
	    History.length -= 1;

	    window.history.back();
	  },

	  /**
	   * The current number of entries in the history.
	   */
	  length: 1

	};

	module.exports = History;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(25);

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


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(47);

	var FakeNode = {

	  render: function () {
	    invariant(
	      false,
	      '%s elements should not be rendered',
	      this.constructor.displayName
	    );
	  }

	};

	module.exports = FakeNode;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var PropTypes = {

	  /**
	   * Requires that the value of a prop be falsy.
	   */
	  falsy: function (props, propName, componentName) {
	    if (props[propName])
	      return new Error('<' + componentName + '> may not have a "' + propName + '" prop');
	  }

	};

	module.exports = PropTypes;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	module.exports = {
	  contextTypes: {
	    getRouteAtDepth: React.PropTypes.func.isRequired,
	    getRouteComponents: React.PropTypes.func.isRequired,
	    routeHandlers: React.PropTypes.array.isRequired
	  },

	  childContextTypes: {
	    routeHandlers: React.PropTypes.array.isRequired
	  },

	  getChildContext: function () {
	    return {
	      routeHandlers: this.context.routeHandlers.concat([ this ])
	    };
	  },

	  getRouteDepth: function () {
	    return this.context.routeHandlers.length - 1;
	  },

	  componentDidMount: function () {
	    this._updateRouteComponent();
	  },

	  componentDidUpdate: function () {
	    this._updateRouteComponent();
	  },

	  _updateRouteComponent: function () {
	    var depth = this.getRouteDepth();
	    var components = this.context.getRouteComponents();
	    components[depth] = this.refs[this.props.ref || '__routeHandler__'];
	  },

	  getRouteHandler: function (props) {
	    var route = this.context.getRouteAtDepth(this.getRouteDepth());
	    return route ? React.createElement(route.handler, props || this.props) : null;
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(47);
	var merge = __webpack_require__(50).merge;
	var qs = __webpack_require__(49);

	var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
	var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
	var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?/g;
	var queryMatcher = /\?(.+)/;

	var _compiledPatterns = {};

	function compilePattern(pattern) {
	  if (!(pattern in _compiledPatterns)) {
	    var paramNames = [];
	    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
	      if (paramName) {
	        paramNames.push(paramName);
	        return '([^/?#]+)';
	      } else if (match === '*') {
	        paramNames.push('splat');
	        return '(.*?)';
	      } else {
	        return '\\' + match;
	      }
	    });

	    _compiledPatterns[pattern] = {
	      matcher: new RegExp('^' + source + '$', 'i'),
	      paramNames: paramNames
	    };
	  }

	  return _compiledPatterns[pattern];
	}

	var Path = {

	  /**
	   * Safely decodes special characters in the given URL path.
	   */
	  decode: function (path) {
	    return decodeURI(path.replace(/\+/g, ' '));
	  },

	  /**
	   * Safely encodes special characters in the given URL path.
	   */
	  encode: function (path) {
	    return encodeURI(path).replace(/%20/g, '+');
	  },

	  /**
	   * Returns an array of the names of all parameters in the given pattern.
	   */
	  extractParamNames: function (pattern) {
	    return compilePattern(pattern).paramNames;
	  },

	  /**
	   * Extracts the portions of the given URL path that match the given pattern
	   * and returns an object of param name => value pairs. Returns null if the
	   * pattern does not match the given path.
	   */
	  extractParams: function (pattern, path) {
	    var object = compilePattern(pattern);
	    var match = path.match(object.matcher);

	    if (!match)
	      return null;

	    var params = {};

	    object.paramNames.forEach(function (paramName, index) {
	      params[paramName] = match[index + 1];
	    });

	    return params;
	  },

	  /**
	   * Returns a version of the given route path with params interpolated. Throws
	   * if there is a dynamic segment of the route path for which there is no param.
	   */
	  injectParams: function (pattern, params) {
	    params = params || {};

	    var splatIndex = 0;

	    return pattern.replace(paramInjectMatcher, function (match, paramName) {
	      paramName = paramName || 'splat';

	      // If param is optional don't check for existence
	      if (paramName.slice(-1) !== '?') {
	        invariant(
	          params[paramName] != null,
	          'Missing "' + paramName + '" parameter for path "' + pattern + '"'
	        );
	      } else {
	        paramName = paramName.slice(0, -1);

	        if (params[paramName] == null)
	          return '';
	      }

	      var segment;
	      if (paramName === 'splat' && Array.isArray(params[paramName])) {
	        segment = params[paramName][splatIndex++];

	        invariant(
	          segment != null,
	          'Missing splat # ' + splatIndex + ' for path "' + pattern + '"'
	        );
	      } else {
	        segment = params[paramName];
	      }

	      return segment;
	    }).replace(paramInjectTrailingSlashMatcher, '/');
	  },

	  /**
	   * Returns an object that is the result of parsing any query string contained
	   * in the given path, null if the path contains no query string.
	   */
	  extractQuery: function (path) {
	    var match = path.match(queryMatcher);
	    return match && qs.parse(match[1]);
	  },

	  /**
	   * Returns a version of the given path without the query string.
	   */
	  withoutQuery: function (path) {
	    return path.replace(queryMatcher, '');
	  },

	  /**
	   * Returns a version of the given path with the parameters in the given
	   * query merged into the query string.
	   */
	  withQuery: function (path, query) {
	    var existingQuery = Path.extractQuery(path);

	    if (existingQuery)
	      query = query ? merge(existingQuery, query) : existingQuery;

	    var queryString = query && qs.stringify(query);

	    if (queryString)
	      return Path.withoutQuery(path) + '?' + queryString;

	    return path;
	  },

	  /**
	   * Returns true if the given path is absolute.
	   */
	  isAbsolute: function (path) {
	    return path.charAt(0) === '/';
	  },

	  /**
	   * Returns a normalized version of the given path.
	   */
	  normalize: function (path, parentRoute) {
	    return path.replace(/^\/*/, '/');
	  },

	  /**
	   * Joins two URL paths together.
	   */
	  join: function (a, b) {
	    return a.replace(/\/*$/, '/') + b;
	  }

	};

	module.exports = Path;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	/**
	 * Provides the router with context for Router.Navigation.
	 */
	var NavigationContext = {

	  childContextTypes: {
	    makePath: React.PropTypes.func.isRequired,
	    makeHref: React.PropTypes.func.isRequired,
	    transitionTo: React.PropTypes.func.isRequired,
	    replaceWith: React.PropTypes.func.isRequired,
	    goBack: React.PropTypes.func.isRequired
	  },

	  getChildContext: function () {
	    return {
	      makePath: this.constructor.makePath,
	      makeHref: this.constructor.makeHref,
	      transitionTo: this.constructor.transitionTo,
	      replaceWith: this.constructor.replaceWith,
	      goBack: this.constructor.goBack
	    };
	  }

	};

	module.exports = NavigationContext;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var assign = __webpack_require__(45);
	var Path = __webpack_require__(29);

	function routeIsActive(activeRoutes, routeName) {
	  return activeRoutes.some(function (route) {
	    return route.name === routeName;
	  });
	}

	function paramsAreActive(activeParams, params) {
	  for (var property in params)
	    if (String(activeParams[property]) !== String(params[property]))
	      return false;

	  return true;
	}

	function queryIsActive(activeQuery, query) {
	  for (var property in query)
	    if (String(activeQuery[property]) !== String(query[property]))
	      return false;

	  return true;
	}

	/**
	 * Provides the router with context for Router.State.
	 */
	var StateContext = {

	  /**
	   * Returns the current URL path + query string.
	   */
	  getCurrentPath: function () {
	    return this.state.path;
	  },

	  /**
	   * Returns a read-only array of the currently active routes.
	   */
	  getCurrentRoutes: function () {
	    return this.state.routes.slice(0);
	  },

	  /**
	   * Returns the current URL path without the query string.
	   */
	  getCurrentPathname: function () {
	    return this.state.pathname;
	  },

	  /**
	   * Returns a read-only object of the currently active URL parameters.
	   */
	  getCurrentParams: function () {
	    return assign({}, this.state.params);
	  },

	  /**
	   * Returns a read-only object of the currently active query parameters.
	   */
	  getCurrentQuery: function () {
	    return assign({}, this.state.query);
	  },

	  /**
	   * Returns true if the given route, params, and query are active.
	   */
	  isActive: function (to, params, query) {
	    if (Path.isAbsolute(to))
	      return to === this.state.path;

	    return routeIsActive(this.state.routes, to) &&
	      paramsAreActive(this.state.params, params) &&
	      (query == null || queryIsActive(this.state.query, query));
	  },

	  childContextTypes: {
	    getCurrentPath: React.PropTypes.func.isRequired,
	    getCurrentRoutes: React.PropTypes.func.isRequired,
	    getCurrentPathname: React.PropTypes.func.isRequired,
	    getCurrentParams: React.PropTypes.func.isRequired,
	    getCurrentQuery: React.PropTypes.func.isRequired,
	    isActive: React.PropTypes.func.isRequired
	  },

	  getChildContext: function () {
	    return {
	      getCurrentPath: this.getCurrentPath,
	      getCurrentRoutes: this.getCurrentRoutes,
	      getCurrentPathname: this.getCurrentPathname,
	      getCurrentParams: this.getCurrentParams,
	      getCurrentQuery: this.getCurrentQuery,
	      isActive: this.isActive
	    };
	  }

	};

	module.exports = StateContext;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(47);
	var canUseDOM = __webpack_require__(48).canUseDOM;
	var getWindowScrollPosition = __webpack_require__(40);

	function shouldUpdateScroll(state, prevState) {
	  if (!prevState)
	    return true;

	  // Don't update scroll position when only the query has changed.
	  if (state.pathname === prevState.pathname)
	    return false;

	  var routes = state.routes;
	  var prevRoutes = prevState.routes;

	  var sharedAncestorRoutes = routes.filter(function (route) {
	    return prevRoutes.indexOf(route) !== -1;
	  });

	  return !sharedAncestorRoutes.some(function (route) {
	    return route.ignoreScrollBehavior;
	  });
	}

	/**
	 * Provides the router with the ability to manage window scroll position
	 * according to its scroll behavior.
	 */
	var Scrolling = {

	  statics: {
	    /**
	     * Records curent scroll position as the last known position for the given URL path.
	     */
	    recordScrollPosition: function (path) {
	      if (!this.scrollHistory)
	        this.scrollHistory = {};

	      this.scrollHistory[path] = getWindowScrollPosition();
	    },

	    /**
	     * Returns the last known scroll position for the given URL path.
	     */
	    getScrollPosition: function (path) {
	      if (!this.scrollHistory)
	        this.scrollHistory = {};

	      return this.scrollHistory[path] || null;
	    }
	  },

	  componentWillMount: function () {
	    invariant(
	      this.getScrollBehavior() == null || canUseDOM,
	      'Cannot use scroll behavior without a DOM'
	    );
	  },

	  componentDidMount: function () {
	    this._updateScroll();
	  },

	  componentDidUpdate: function (prevProps, prevState) {
	    this._updateScroll(prevState);
	  },

	  _updateScroll: function (prevState) {
	    if (!shouldUpdateScroll(this.state, prevState))
	      return;

	    var scrollBehavior = this.getScrollBehavior();

	    if (scrollBehavior)
	      scrollBehavior.updateScrollPosition(
	        this.constructor.getScrollPosition(this.state.path),
	        this.state.action
	      );
	  }

	};

	module.exports = Scrolling;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint -W084 */
	var React = __webpack_require__(1);
	var warning = __webpack_require__(46);
	var invariant = __webpack_require__(47);
	var DefaultRoute = __webpack_require__(8);
	var NotFoundRoute = __webpack_require__(10);
	var Redirect = __webpack_require__(11);
	var Route = __webpack_require__(12);
	var Path = __webpack_require__(29);

	var CONFIG_ELEMENT_TYPES = [
	  DefaultRoute.type,
	  NotFoundRoute.type,
	  Redirect.type,
	  Route.type
	];

	function createRedirectHandler(to, _params, _query) {
	  return React.createClass({
	    statics: {
	      willTransitionTo: function (transition, params, query) {
	        transition.redirect(to, _params || params, _query || query);
	      }
	    },

	    render: function () {
	      return null;
	    }
	  });
	}

	function checkPropTypes(componentName, propTypes, props) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error)
	        warning(false, error.message);
	    }
	  }
	}

	function createRoute(element, parentRoute, namedRoutes) {
	  var type = element.type;
	  var props = element.props;
	  var componentName = (type && type.displayName) || 'UnknownComponent';

	  invariant(
	    CONFIG_ELEMENT_TYPES.indexOf(type) !== -1,
	    'Unrecognized route configuration element "<%s>"',
	    componentName
	  );

	  if (type.propTypes)
	    checkPropTypes(componentName, type.propTypes, props);

	  var route = { name: props.name };

	  if (props.ignoreScrollBehavior) {
	    route.ignoreScrollBehavior = true;
	  }

	  if (type === Redirect.type) {
	    route.handler = createRedirectHandler(props.to, props.params, props.query);
	    props.path = props.path || props.from || '*';
	  } else {
	    route.handler = props.handler;
	  }

	  var parentPath = (parentRoute && parentRoute.path) || '/';

	  if ((props.path || props.name) && type !== DefaultRoute.type && type !== NotFoundRoute.type) {
	    var path = props.path || props.name;

	    // Relative paths extend their parent.
	    if (!Path.isAbsolute(path))
	      path = Path.join(parentPath, path);

	    route.path = Path.normalize(path);
	  } else {
	    route.path = parentPath;

	    if (type === NotFoundRoute.type)
	      route.path += '*';
	  }

	  route.paramNames = Path.extractParamNames(route.path);

	  // Make sure the route's path has all params its parent needs.
	  if (parentRoute && Array.isArray(parentRoute.paramNames)) {
	    parentRoute.paramNames.forEach(function (paramName) {
	      invariant(
	        route.paramNames.indexOf(paramName) !== -1,
	        'The nested route path "%s" is missing the "%s" parameter of its parent path "%s"',
	        route.path, paramName, parentRoute.path
	      );
	    });
	  }

	  // Make sure the route can be looked up by <Link>s.
	  if (props.name) {
	    invariant(
	      namedRoutes[props.name] == null,
	      'You cannot use the name "%s" for more than one route',
	      props.name
	    );

	    namedRoutes[props.name] = route;
	  }

	  // Handle <NotFoundRoute>.
	  if (type === NotFoundRoute.type) {
	    invariant(
	      parentRoute,
	      '<NotFoundRoute> must have a parent <Route>'
	    );

	    invariant(
	      parentRoute.notFoundRoute == null,
	      'You may not have more than one <NotFoundRoute> per <Route>'
	    );

	    parentRoute.notFoundRoute = route;

	    return null;
	  }

	  // Handle <DefaultRoute>.
	  if (type === DefaultRoute.type) {
	    invariant(
	      parentRoute,
	      '<DefaultRoute> must have a parent <Route>'
	    );

	    invariant(
	      parentRoute.defaultRoute == null,
	      'You may not have more than one <DefaultRoute> per <Route>'
	    );

	    parentRoute.defaultRoute = route;

	    return null;
	  }

	  route.childRoutes = createRoutesFromChildren(props.children, route, namedRoutes);

	  return route;
	}

	/**
	 * Creates and returns an array of route objects from the given ReactChildren.
	 */
	function createRoutesFromChildren(children, parentRoute, namedRoutes) {
	  var routes = [];

	  React.Children.forEach(children, function (child) {
	    // Exclude <DefaultRoute>s and <NotFoundRoute>s.
	    if (child = createRoute(child, parentRoute, namedRoutes))
	      routes.push(child);
	  });

	  return routes;
	}

	module.exports = createRoutesFromChildren;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	function supportsHistory() {
	  /*! taken from modernizr
	   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	   */
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 ||
	      (ua.indexOf('Android 4.0') !== -1)) &&
	      ua.indexOf('Mobile Safari') !== -1 &&
	      ua.indexOf('Chrome') === -1 &&
	      ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return (window.history && 'pushState' in window.history);
	}

	module.exports = supportsHistory;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var assign = __webpack_require__(45);
	var reversedArray = __webpack_require__(41);
	var Redirect = __webpack_require__(36);
	var Promise = __webpack_require__(42);

	/**
	 * Runs all hook functions serially and calls callback(error) when finished.
	 * A hook may return a promise if it needs to execute asynchronously.
	 */
	function runHooks(hooks, callback) {
	  var promise;
	  try {
	    promise = hooks.reduce(function (promise, hook) {
	      // The first hook to use transition.wait makes the rest
	      // of the transition async from that point forward.
	      return promise ? promise.then(hook) : hook();
	    }, null);
	  } catch (error) {
	    return callback(error); // Sync error.
	  }

	  if (promise) {
	    // Use setTimeout to break the promise chain.
	    promise.then(function () {
	      setTimeout(callback);
	    }, function (error) {
	      setTimeout(function () {
	        callback(error);
	      });
	    });
	  } else {
	    callback();
	  }
	}

	/**
	 * Calls the willTransitionFrom hook of all handlers in the given matches
	 * serially in reverse with the transition object and the current instance of
	 * the route's handler, so that the deepest nested handlers are called first.
	 * Calls callback(error) when finished.
	 */
	function runTransitionFromHooks(transition, routes, components, callback) {
	  components = reversedArray(components);

	  var hooks = reversedArray(routes).map(function (route, index) {
	    return function () {
	      var handler = route.handler;

	      if (!transition.isAborted && handler.willTransitionFrom)
	        return handler.willTransitionFrom(transition, components[index]);

	      var promise = transition._promise;
	      transition._promise = null;

	      return promise;
	    };
	  });

	  runHooks(hooks, callback);
	}

	/**
	 * Calls the willTransitionTo hook of all handlers in the given matches
	 * serially with the transition object and any params that apply to that
	 * handler. Calls callback(error) when finished.
	 */
	function runTransitionToHooks(transition, routes, params, query, callback) {
	  var hooks = routes.map(function (route) {
	    return function () {
	      var handler = route.handler;

	      if (!transition.isAborted && handler.willTransitionTo)
	        handler.willTransitionTo(transition, params, query);

	      var promise = transition._promise;
	      transition._promise = null;

	      return promise;
	    };
	  });

	  runHooks(hooks, callback);
	}

	/**
	 * Encapsulates a transition to a given path.
	 *
	 * The willTransitionTo and willTransitionFrom handlers receive
	 * an instance of this class as their first argument.
	 */
	function Transition(path, retry) {
	  this.path = path;
	  this.abortReason = null;
	  this.isAborted = false;
	  this.retry = retry.bind(this);
	  this._promise = null;
	}

	assign(Transition.prototype, {

	  abort: function (reason) {
	    if (this.isAborted) {
	      // First abort wins.
	      return;
	    }

	    this.abortReason = reason;
	    this.isAborted = true;
	  },

	  redirect: function (to, params, query) {
	    this.abort(new Redirect(to, params, query));
	  },

	  wait: function (value) {
	    this._promise = Promise.resolve(value);
	  },

	  from: function (routes, components, callback) {
	    return runTransitionFromHooks(this, routes, components, callback);
	  },

	  to: function (routes, params, query, callback) {
	    return runTransitionToHooks(this, routes, params, query, callback);
	  }

	});

	module.exports = Transition;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Encapsulates a redirect to the given route.
	 */
	function Redirect(to, params, query) {
	  this.to = to;
	  this.params = params;
	  this.query = query;
	}

	module.exports = Redirect;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Represents a cancellation caused by navigating away
	 * before the previous transition has fully resolved.
	 */
	function Cancellation() { }

	module.exports = Cancellation;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Actions that modify the URL.
	 */
	var LocationActions = {

	  /**
	   * Indicates a new location is being pushed to the history stack.
	   */
	  PUSH: 'push',

	  /**
	   * Indicates the current location should be replaced.
	   */
	  REPLACE: 'replace',

	  /**
	   * Indicates the most recent entry should be removed from the history stack.
	   */
	  POP: 'pop'

	};

	module.exports = LocationActions;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};

	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canMutationObserver = typeof window !== 'undefined'
	    && window.MutationObserver;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;

	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }

	    var queue = [];

	    if (canMutationObserver) {
	        var hiddenDiv = document.createElement("div");
	        var observer = new MutationObserver(function () {
	            var queueList = queue.slice();
	            queue.length = 0;
	            queueList.forEach(function (fn) {
	                fn();
	            });
	        });

	        observer.observe(hiddenDiv, { attributes: true });

	        return function nextTick(fn) {
	            if (!queue.length) {
	                hiddenDiv.setAttribute('yes', 'no');
	            }
	            queue.push(fn);
	        };
	    }

	    if (canPost) {
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);

	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }

	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();

	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(47);
	var canUseDOM = __webpack_require__(48).canUseDOM;

	/**
	 * Returns the current scroll position of the window as { x, y }.
	 */
	function getWindowScrollPosition() {
	  invariant(
	    canUseDOM,
	    'Cannot get current scroll position without a DOM'
	  );

	  return {
	    x: window.pageXOffset || document.documentElement.scrollLeft,
	    y: window.pageYOffset || document.documentElement.scrollTop
	  };
	}

	module.exports = getWindowScrollPosition;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	function reversedArray(array) {
	  return array.slice(0).reverse();
	}

	module.exports = reversedArray;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var Promise = __webpack_require__(68);

	// TODO: Use process.env.NODE_ENV check + envify to enable
	// when's promise monitor here when in dev.

	module.exports = Promise;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports.ActionMethods = __webpack_require__(51);

	exports.ListenerMethods = __webpack_require__(52);

	exports.PublisherMethods = __webpack_require__(53);

	exports.StoreMethods = __webpack_require__(54);

	exports.createAction = __webpack_require__(55);

	exports.createStore = __webpack_require__(56);

	exports.connect = __webpack_require__(57);

	exports.ListenerMixin = __webpack_require__(58);

	exports.listenTo = __webpack_require__(59);

	exports.listenToMany = __webpack_require__(60);


	var maker = __webpack_require__(61).staticJoinCreator;

	exports.joinTrailing = exports.all = maker("last"); // Reflux.all alias for backward compatibility

	exports.joinLeading = maker("first");

	exports.joinStrict = maker("strict");

	exports.joinConcat = maker("all");

	var _ = __webpack_require__(62);

	/**
	 * Convenience function for creating a set of actions
	 *
	 * @param definitions the definitions for the actions to be created
	 * @returns an object with actions of corresponding action names
	 */
	exports.createActions = function(definitions) {
	    var actions = {};
	    for (var k in definitions){
	        var val = definitions[k],
	            actionName = _.isObject(val) ? k : val;

	        actions[actionName] = exports.createAction(val);
	    }
	    return actions;
	};

	/**
	 * Sets the eventmitter that Reflux uses
	 */
	exports.setEventEmitter = function(ctx) {
	    var _ = __webpack_require__(62);
	    _.EventEmitter = ctx;
	};

	/**
	 * Sets the method used for deferring actions and stores
	 */
	exports.nextTick = function(nextTick) {
	    var _ = __webpack_require__(62);
	    _.nextTick = nextTick;
	};

	/**
	 * Provides the set of created actions and stores for introspection
	 */
	exports.__keep = __webpack_require__(63);

	/**
	 * Warn if Function.prototype.bind not available
	 */
	if (!Function.prototype.bind) {
	  console.error(
	    'Function.prototype.bind not available. ' +
	    'ES5 shim required. ' +
	    'https://github.com/spoike/refluxjs#es5'
	  );
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cx
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}

	module.exports = cx;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	};

	module.exports = assign;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	"use strict";

	var emptyFunction = __webpack_require__(64);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ("production" !== process.env.NODE_ENV) {
	  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      console.warn('Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];}));
	    }
	  };
	}

	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	"use strict";

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners:
	    canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(65);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Load modules


	// Declare internals

	var internals = {};


	exports.arrayToObject = function (source) {

	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source) {

	    if (!source) {
	        return target;
	    }

	    if (Array.isArray(source)) {
	        for (var i = 0, il = source.length; i < il; ++i) {
	            if (typeof source[i] !== 'undefined') {
	                if (typeof target[i] === 'object') {
	                    target[i] = exports.merge(target[i], source[i]);
	                }
	                else {
	                    target[i] = source[i];
	                }
	            }
	        }

	        return target;
	    }

	    if (Array.isArray(target)) {
	        if (typeof source !== 'object') {
	            target.push(source);
	            return target;
	        }
	        else {
	            target = exports.arrayToObject(target);
	        }
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (value &&
	            typeof value === 'object') {

	            if (!target[key]) {
	                target[key] = value;
	            }
	            else {
	                target[key] = exports.merge(target[key], value);
	            }
	        }
	        else {
	            target[key] = value;
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};


	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, l = obj.length; i < l; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (typeof Buffer !== 'undefined') {
	        return Buffer.isBuffer(obj);
	    }
	    else {
	        return false;
	    }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69).Buffer))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all actions.
	 * This module is consumed by `createAction`.
	 */
	module.exports = {
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(62),
	    maker = __webpack_require__(61).instanceJoinCreator;

	/**
	 * Extract child listenables from a parent from their
	 * children property and return them in a keyed Object
	 *
	 * @param {Object} listenable The parent listenable
	 */
	mapChildListenables = function(listenable) {
	    var i = 0, children = {};
	    for (;i < (listenable.children||[]).length; ++i) {
	        childName = listenable.children[i];
	        if(listenable[childName]){
	            children[childName] = listenable[childName];
	        }
	    }
	    return children;
	};

	/**
	 * Make a flat dictionary of all listenables including their
	 * possible children (recursively), concatenating names in camelCase.
	 *
	 * @param {Object} listenables The top-level listenables
	 */
	flattenListenables = function(listenables) {
	    var flattened = {};
	    for(var key in listenables){
	        var listenable = listenables[key];
	        var childMap = mapChildListenables(listenable);

	        // recursively flatten children
	        var children = flattenListenables(childMap);

	        // add the primary listenable and chilren
	        flattened[key] = listenable;
	        for(var childKey in children){
	            var childListenable = children[childKey];
	            flattened[key + _.capitalize(childKey)] = childListenable;
	        }
	    }

	    return flattened;
	};

	/**
	 * A module of methods related to listening.
	 */
	module.exports = {

	    /**
	     * An internal utility function used by `validateListening`
	     *
	     * @param {Action|Store} listenable The listenable we want to search for
	     * @returns {Boolean} The result of a recursive search among `this.subscriptions`
	     */
	    hasListener: function(listenable) {
	        var i = 0, j, listener, listenables;
	        for (;i < (this.subscriptions||[]).length; ++i) {
	            listenables = [].concat(this.subscriptions[i].listenable);
	            for (j = 0; j < listenables.length; j++){
	                listener = listenables[j];
	                if (listener === listenable || listener.hasListener && listener.hasListener(listenable)) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    },

	    /**
	     * A convenience method that listens to all listenables in the given object.
	     *
	     * @param {Object} listenables An object of listenables. Keys will be used as callback method names.
	     */
	    listenToMany: function(listenables){
	        var allListenables = flattenListenables(listenables);
	        for(var key in allListenables){
	            var cbname = _.callbackName(key),
	                localname = this[cbname] ? cbname : this[key] ? key : undefined;
	            if (localname){
	                this.listenTo(allListenables[key],localname,this[cbname+"Default"]||this[localname+"Default"]||localname);
	            }
	        }
	    },

	    /**
	     * Checks if the current context can listen to the supplied listenable
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @returns {String|Undefined} An error message, or undefined if there was no problem.
	     */
	    validateListening: function(listenable){
	        if (listenable === this) {
	            return "Listener is not able to listen to itself";
	        }
	        if (!_.isFunction(listenable.listen)) {
	            return listenable + " is missing a listen method";
	        }
	        if (listenable.hasListener && listenable.hasListener(this)) {
	            return "Listener cannot listen to this listenable because of circular loop";
	        }
	    },

	    /**
	     * Sets up a subscription to the given listenable for the context object
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @param {Function|String} callback The callback to register as event handler
	     * @param {Function|String} defaultCallback The callback to register as default handler
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is the object being listened to
	     */
	    listenTo: function(listenable, callback, defaultCallback) {
	        var desub, unsubscriber, subscriptionobj, subs = this.subscriptions = this.subscriptions || [];
	        _.throwIf(this.validateListening(listenable));
	        this.fetchInitialState(listenable, defaultCallback);
	        desub = listenable.listen(this[callback]||callback, this);
	        unsubscriber = function() {
	            var index = subs.indexOf(subscriptionobj);
	            _.throwIf(index === -1,'Tried to remove listen already gone from subscriptions list!');
	            subs.splice(index, 1);
	            desub();
	        };
	        subscriptionobj = {
	            stop: unsubscriber,
	            listenable: listenable
	        };
	        subs.push(subscriptionobj);
	        return subscriptionobj;
	    },

	    /**
	     * Stops listening to a single listenable
	     *
	     * @param {Action|Store} listenable The action or store we no longer want to listen to
	     * @returns {Boolean} True if a subscription was found and removed, otherwise false.
	     */
	    stopListeningTo: function(listenable){
	        var sub, i = 0, subs = this.subscriptions || [];
	        for(;i < subs.length; i++){
	            sub = subs[i];
	            if (sub.listenable === listenable){
	                sub.stop();
	                _.throwIf(subs.indexOf(sub)!==-1,'Failed to remove listen from subscriptions list!');
	                return true;
	            }
	        }
	        return false;
	    },

	    /**
	     * Stops all subscriptions and empties subscriptions array
	     */
	    stopListeningToAll: function(){
	        var remaining, subs = this.subscriptions || [];
	        while((remaining=subs.length)){
	            subs[0].stop();
	            _.throwIf(subs.length!==remaining-1,'Failed to remove listen from subscriptions list!');
	        }
	    },

	    /**
	     * Used in `listenTo`. Fetches initial data from a publisher if it has a `getInitialState` method.
	     * @param {Action|Store} listenable The publisher we want to get initial state from
	     * @param {Function|String} defaultCallback The method to receive the data
	     */
	    fetchInitialState: function (listenable, defaultCallback) {
	        defaultCallback = (defaultCallback && this[defaultCallback]) || defaultCallback;
	        var me = this;
	        if (_.isFunction(defaultCallback) && _.isFunction(listenable.getInitialState)) {
	            data = listenable.getInitialState();
	            if (data && _.isFunction(data.then)) {
	                data.then(function() {
	                    defaultCallback.apply(me, arguments);
	                });
	            } else {
	                defaultCallback.call(this, data);
	            }
	        }
	    },

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the last emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinTrailing: maker("last"),

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the first emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinLeading: maker("first"),

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with all emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinConcat: maker("all"),

	    /**
	     * The callback will be called once all listenables have triggered.
	     * If a callback triggers twice before that happens, an error is thrown.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinStrict: maker("strict")
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(62);

	/**
	 * A module of methods for object that you want to be able to listen to.
	 * This module is consumed by `createStore` and `createAction`
	 */
	module.exports = {

	    /**
	     * Hook used by the publisher that is invoked before emitting
	     * and before `shouldEmit`. The arguments are the ones that the action
	     * is invoked with. If this function returns something other than
	     * undefined, that will be passed on as arguments for shouldEmit and
	     * emission.
	     */
	    preEmit: function() {},

	    /**
	     * Hook used by the publisher after `preEmit` to determine if the
	     * event should be emitted with given arguments. This may be overridden
	     * in your application, default implementation always returns true.
	     *
	     * @returns {Boolean} true if event should be emitted
	     */
	    shouldEmit: function() { return true; },

	    /**
	     * Subscribes the given callback for action triggered
	     *
	     * @param {Function} callback The callback to register as event handler
	     * @param {Mixed} [optional] bindContext The context to bind the callback with
	     * @returns {Function} Callback that unsubscribes the registered event handler
	     */
	    listen: function(callback, bindContext) {
	        bindContext = bindContext || this;
	        var eventHandler = function(args) {
	            callback.apply(bindContext, args);
	        }, me = this;
	        this.emitter.addListener(this.eventLabel, eventHandler);
	        return function() {
	            me.emitter.removeListener(me.eventLabel, eventHandler);
	        };
	    },

	    /**
	     * Attach handlers to promise that trigger the completed and failed
	     * child publishers, if available.
	     *
	     * @param {Object} The promise to attach to
	     */
	    promise: function(promise) {
	        var me = this;

	        var canHandlePromise =
	            this.children.indexOf('completed') >= 0 &&
	            this.children.indexOf('failed') >= 0;

	        if (!canHandlePromise){
	            throw new Error('Publisher must have "completed" and "failed" child publishers');
	        }

	        promise.then(function(response) {
	            return me.completed(response);
	        }).catch(function(error) {
	            return me.failed(error);
	        });
	    },

	    /**
	     * Subscribes the given callback for action triggered, which should
	     * return a promise that in turn is passed to `this.promise`
	     *
	     * @param {Function} callback The callback to register as event handler
	     */
	    listenAndPromise: function(callback, bindContext) {
	        var me = this;
	        bindContext = bindContext || this;

	        return this.listen(function() {
	            var args = arguments,
	                promise = callback.apply(bindContext, args);
	            return me.promise.call(me, promise);
	        }, bindContext);
	    },

	    /**
	     * Publishes an event using `this.emitter` (if `shouldEmit` agrees)
	     */
	    trigger: function() {
	        var args = arguments,
	            pre = this.preEmit.apply(this, args);
	        args = pre === undefined ? args : _.isArguments(pre) ? pre : [].concat(pre);
	        if (this.shouldEmit.apply(this, args)) {
	            this.emitter.emit(this.eventLabel, args);
	        }
	    },

	    /**
	     * Tries to publish the event on the next tick
	     */
	    triggerAsync: function(){
	        var args = arguments,me = this;
	        _.nextTick(function() {
	            me.trigger.apply(me, args);
	        });
	    }
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all stores.
	 * This module is consumed by `createStore`.
	 */
	module.exports = {
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(62),
	    Reflux = __webpack_require__(43),
	    Keep = __webpack_require__(63),
	    allowed = {preEmit:1,shouldEmit:1};

	/**
	 * Creates an action functor object. It is mixed in with functions
	 * from the `PublisherMethods` mixin. `preEmit` and `shouldEmit` may
	 * be overridden in the definition object.
	 *
	 * @param {Object} definition The action object definition
	 */
	var createAction = function(definition) {

	    definition = definition || {};
	    if (!_.isObject(definition)){
	        definition = {name: definition};
	    }

	    for(var a in Reflux.ActionMethods){
	        if (!allowed[a] && Reflux.PublisherMethods[a]) {
	            throw new Error("Cannot override API method " + a +
	                " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead."
	            );
	        }
	    }

	    for(var d in definition){
	        if (!allowed[d] && Reflux.PublisherMethods[d]) {
	            throw new Error("Cannot override API method " + d +
	                " in action creation. Use another method name or override it on Reflux.PublisherMethods instead."
	            );
	        }
	    }

	    definition.children = definition.children || [];
	    if (definition.asyncResult){
	        definition.children = definition.children.concat(["completed","failed"]);
	    }

	    var i = 0, childActions = {};
	    for (; i < definition.children.length; i++) {
	        var name = definition.children[i];
	        childActions[name] = createAction(name);
	    }

	    var context = _.extend({
	        eventLabel: "action",
	        emitter: new _.EventEmitter(),
	        _isAction: true
	    }, Reflux.PublisherMethods, Reflux.ActionMethods, definition);

	    var functor = function() {
	        functor[functor.sync?"trigger":"triggerAsync"].apply(functor, arguments);
	    };

	    _.extend(functor,childActions,context);

	    Keep.createdActions.push(functor);

	    return functor;

	};

	module.exports = createAction;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(62),
	    Reflux = __webpack_require__(43),
	    Keep = __webpack_require__(63),
	    mixer = __webpack_require__(66),
	    allowed = {preEmit:1,shouldEmit:1},
	    bindMethods = __webpack_require__(67);

	/**
	 * Creates an event emitting Data Store. It is mixed in with functions
	 * from the `ListenerMethods` and `PublisherMethods` mixins. `preEmit`
	 * and `shouldEmit` may be overridden in the definition object.
	 *
	 * @param {Object} definition The data store object definition
	 * @returns {Store} A data store instance
	 */
	module.exports = function(definition) {

	    definition = definition || {};

	    for(var a in Reflux.StoreMethods){
	        if (!allowed[a] && (Reflux.PublisherMethods[a] || Reflux.ListenerMethods[a])){
	            throw new Error("Cannot override API method " + a +
	                " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
	            );
	        }
	    }

	    for(var d in definition){
	        if (!allowed[d] && (Reflux.PublisherMethods[d] || Reflux.ListenerMethods[d])){
	            throw new Error("Cannot override API method " + d +
	                " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
	            );
	        }
	    }

	    definition = mixer(definition);

	    function Store() {
	        var i=0, arr;
	        this.subscriptions = [];
	        this.emitter = new _.EventEmitter();
	        this.eventLabel = "change";
	        bindMethods(this, definition);
	        if (this.init && _.isFunction(this.init)) {
	            this.init();
	        }
	        if (this.listenables){
	            arr = [].concat(this.listenables);
	            for(;i < arr.length;i++){
	                this.listenToMany(arr[i]);
	            }
	        }
	    }

	    _.extend(Store.prototype, Reflux.ListenerMethods, Reflux.PublisherMethods, Reflux.StoreMethods, definition);

	    var store = new Store();
	    Keep.createdStores.push(store);

	    return store;
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(43),
	    _ = __webpack_require__(62);

	module.exports = function(listenable,key){
	    return {
	        getInitialState: function(){
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (key === undefined) {
	                return listenable.getInitialState();
	            } else {
	                return _.object([key],[listenable.getInitialState()]);
	            }
	        },
	        componentDidMount: function(){
	            _.extend(this,Reflux.ListenerMethods);
	            var me = this, cb = (key === undefined ? this.setState : function(v){me.setState(_.object([key],[v]));});
	            this.listenTo(listenable,cb);
	        },
	        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
	    };
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(62),
	    ListenerMethods = __webpack_require__(52);

	/**
	 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
	 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
	 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
	 * import everything this mixin contains!
	 */
	module.exports = _.extend({

	    /**
	     * Cleans up all listener previously registered.
	     */
	    componentWillUnmount: ListenerMethods.stopListeningToAll

	}, ListenerMethods);


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(43);


	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `ListenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method.
	 *
	 * @param {Action|Store} listenable An Action or Store that should be
	 *  listened to.
	 * @param {Function|String} callback The callback to register as event handler
	 * @param {Function|String} defaultCallback The callback to register as default handler
	 * @returns {Object} An object to be used as a mixin, which sets up the listener for the given listenable.
	 */
	module.exports = function(listenable,callback,initial){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in Reflux.ListenerMethods){
	                if (this[m] !== Reflux.ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenTo!";
	                    }
	                    this[m] = Reflux.ListenerMethods[m];
	                }
	            }
	            this.listenTo(listenable,callback,initial);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(43);

	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `listenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method. This version is used
	 * to automatically set up a `listenToMany` call.
	 *
	 * @param {Object} listenables An object of listenables
	 * @returns {Object} An object to be used as a mixin, which sets up the listeners for the given listenables.
	 */
	module.exports = function(listenables){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in Reflux.ListenerMethods){
	                if (this[m] !== Reflux.ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenToMany!";
	                    }
	                    this[m] = Reflux.ListenerMethods[m];
	                }
	            }
	            this.listenToMany(listenables);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Internal module used to create static and instance join methods
	 */

	var slice = Array.prototype.slice,
	    _ = __webpack_require__(62),
	    createStore = __webpack_require__(56),
	    strategyMethodNames = {
	        strict: "joinStrict",
	        first: "joinLeading",
	        last: "joinTrailing",
	        all: "joinConcat"
	    };

	/**
	 * Used in `index.js` to create the static join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} A static function which returns a store with a join listen on the given listenables using the given strategy
	 */
	exports.staticJoinCreator = function(strategy){
	    return function(/* listenables... */) {
	        var listenables = slice.call(arguments);
	        return createStore({
	            init: function(){
	                this[strategyMethodNames[strategy]].apply(this,listenables.concat("triggerAsync"));
	            }
	        });
	    };
	};

	/**
	 * Used in `ListenerMethods.js` to create the instance join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} An instance method which sets up a join listen on the given listenables using the given strategy
	 */
	exports.instanceJoinCreator = function(strategy){
	    return function(/* listenables..., callback*/){
	        _.throwIf(arguments.length < 3,'Cannot create a join with less than 2 listenables!');
	        var listenables = slice.call(arguments),
	            callback = listenables.pop(),
	            numberOfListenables = listenables.length,
	            join = {
	                numberOfListenables: numberOfListenables,
	                callback: this[callback]||callback,
	                listener: this,
	                strategy: strategy
	            }, i, cancels = [], subobj;
	        for (i = 0; i < numberOfListenables; i++) {
	            _.throwIf(this.validateListening(listenables[i]));
	        }
	        for (i = 0; i < numberOfListenables; i++) {
	            cancels.push(listenables[i].listen(newListener(i,join),this));
	        }
	        reset(join);
	        subobj = {listenable: listenables};
	        subobj.stop = makeStopper(subobj,cancels,this);
	        this.subscriptions = (this.subscriptions || []).concat(subobj);
	        return subobj;
	    };
	};

	// ---- internal join functions ----

	function makeStopper(subobj,cancels,context){
	    return function() {
	        var i, subs = context.subscriptions;
	            index = (subs ? subs.indexOf(subobj) : -1);
	        _.throwIf(index === -1,'Tried to remove join already gone from subscriptions list!');
	        for(i=0;i < cancels.length; i++){
	            cancels[i]();
	        }
	        subs.splice(index, 1);
	    };
	}

	function reset(join) {
	    join.listenablesEmitted = new Array(join.numberOfListenables);
	    join.args = new Array(join.numberOfListenables);
	}

	function newListener(i,join) {
	    return function() {
	        var callargs = slice.call(arguments);
	        if (join.listenablesEmitted[i]){
	            switch(join.strategy){
	                case "strict": throw new Error("Strict join failed because listener triggered twice.");
	                case "last": join.args[i] = callargs; break;
	                case "all": join.args[i].push(callargs);
	            }
	        } else {
	            join.listenablesEmitted[i] = true;
	            join.args[i] = (join.strategy==="all"?[callargs]:callargs);
	        }
	        emitIfAllListenablesEmitted(join);
	    };
	}

	function emitIfAllListenablesEmitted(join) {
	    for (var i = 0; i < join.numberOfListenables; i++) {
	        if (!join.listenablesEmitted[i]) {
	            return;
	        }
	    }
	    join.callback.apply(join.listener,join.args);
	    reset(join);
	}


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * isObject, extend, isFunction, isArguments are taken from undescore/lodash in
	 * order to remove the dependency
	 */
	var isObject = exports.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	};

	exports.extend = function(obj) {
	    if (!isObject(obj)) {
	        return obj;
	    }
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	        source = arguments[i];
	        for (prop in source) {
	            obj[prop] = source[prop];
	        }
	    }
	    return obj;
	};

	exports.isFunction = function(value) {
	    return typeof value === 'function';
	};

	exports.EventEmitter = __webpack_require__(72);

	exports.nextTick = function(callback) {
	    setTimeout(callback, 0);
	};

	exports.capitalize = function(string){
	    return string.charAt(0).toUpperCase()+string.slice(1);
	};

	exports.callbackName = function(string){
	    return "on"+exports.capitalize(string);
	};

	exports.object = function(keys,vals){
	    var o={}, i=0;
	    for(;i<keys.length;i++){
	        o[keys[i]] = vals[i];
	    }
	    return o;
	};

	exports.isArguments = function(value) {
	    return value && typeof value == 'object' && typeof value.length == 'number' &&
	      (toString.call(value) === '[object Arguments]' || (hasOwnProperty.call(value, 'callee' && !propertyIsEnumerable.call(value, 'callee')))) || false;
	};

	exports.throwIf = function(val,msg){
	    if (val){
	        throw Error(msg||val);
	    }
	};


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports.createdStores = [];

	exports.createdActions = [];

	exports.reset = function() {
	    while(exports.createdStores.length) {
	        exports.createdStores.pop();
	    }
	    while(exports.createdActions.length) {
	        exports.createdActions.pop();
	    }
	};


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function() { return this; };
	emptyFunction.thatReturnsArgument = function(arg) { return arg; };

	module.exports = emptyFunction;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(70);
	var Parse = __webpack_require__(71);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(62);

	module.exports = function mix(def) {
	    var composed = {
	        init: [],
	        preEmit: [],
	        shouldEmit: []
	    };

	    var updated = (function mixDef(mixin) {
	        var mixed = {};
	        if (mixin.mixins) {
	            mixin.mixins.forEach(function (subMixin) {
	                _.extend(mixed, mixDef(subMixin));
	            });
	        }
	        _.extend(mixed, mixin);
	        Object.keys(composed).forEach(function (composable) {
	            if (mixin.hasOwnProperty(composable)) {
	                composed[composable].push(mixin[composable]);
	            }
	        });
	        return mixed;
	    }(def));

	    if (composed.init.length > 1) {
	        updated.init = function () {
	            var args = arguments;
	            composed.init.forEach(function (init) {
	                init.apply(this, args);
	            }, this);
	        };
	    }
	    if (composed.preEmit.length > 1) {
	        updated.preEmit = function () {
	            return composed.preEmit.reduce(function (args, preEmit) {
	                var newValue = preEmit.apply(this, args);
	                return newValue === undefined ? args : [newValue];
	            }.bind(this), arguments);
	        };
	    }
	    if (composed.shouldEmit.length > 1) {
	        updated.shouldEmit = function () {
	            var args = arguments;
	            return !composed.shouldEmit.some(function (shouldEmit) {
	                return !shouldEmit.apply(this, args);
	            }, this);
	        };
	    }
	    Object.keys(composed).forEach(function (composable) {
	        if (composed[composable].length === 1) {
	            updated[composable] = composed[composable][0];
	        }
	    });

	    return updated;
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(store, definition) {
	  for (var name in definition) {
	    var property = definition[name];

	    if (typeof property !== 'function' || !definition.hasOwnProperty(name)) {
	      continue;
	    }

	    store[name] = property.bind(store);
	  }

	  return store;
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

		var makePromise = __webpack_require__(73);
		var Scheduler = __webpack_require__(74);
		var async = __webpack_require__(75);

		return makePromise({
			scheduler: new Scheduler(async)
		});

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(77));


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var base64 = __webpack_require__(81)
	var ieee754 = __webpack_require__(79)
	var isArray = __webpack_require__(80)

	exports.Buffer = Buffer
	exports.SlowBuffer = Buffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var kMaxLength = 0x3fffffff

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Note:
	 *
	 * - Implementation must support adding new properties to `Uint8Array` instances.
	 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
	 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *    incorrect length in some situations.
	 *
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
	 * get the Object implementation, which is slower but will work correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (function () {
	  try {
	    var buf = new ArrayBuffer(0)
	    var arr = new Uint8Array(buf)
	    arr.foo = function () { return 42 }
	    return 42 === arr.foo() && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	})()

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (subject, encoding, noZero) {
	  if (!(this instanceof Buffer))
	    return new Buffer(subject, encoding, noZero)

	  var type = typeof subject

	  // Find the length
	  var length
	  if (type === 'number')
	    length = subject > 0 ? subject >>> 0 : 0
	  else if (type === 'string') {
	    if (encoding === 'base64')
	      subject = base64clean(subject)
	    length = Buffer.byteLength(subject, encoding)
	  } else if (type === 'object' && subject !== null) { // assume object is array-like
	    if (subject.type === 'Buffer' && isArray(subject.data))
	      subject = subject.data
	    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
	  } else
	    throw new TypeError('must start with number, buffer, array or string')

	  if (this.length > kMaxLength)
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	      'size: 0x' + kMaxLength.toString(16) + ' bytes')

	  var buf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Preferred: Return an augmented `Uint8Array` instance for best performance
	    buf = Buffer._augment(new Uint8Array(length))
	  } else {
	    // Fallback: Return THIS instance of Buffer (created by `new`)
	    buf = this
	    buf.length = length
	    buf._isBuffer = true
	  }

	  var i
	  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
	    // Speed optimization -- use set if we're copying from a typed array
	    buf._set(subject)
	  } else if (isArrayish(subject)) {
	    // Treat array-ish objects as a byte array
	    if (Buffer.isBuffer(subject)) {
	      for (i = 0; i < length; i++)
	        buf[i] = subject.readUInt8(i)
	    } else {
	      for (i = 0; i < length; i++)
	        buf[i] = ((subject[i] % 256) + 256) % 256
	    }
	  } else if (type === 'string') {
	    buf.write(subject, 0, encoding)
	  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
	    for (i = 0; i < length; i++) {
	      buf[i] = 0
	    }
	  }

	  return buf
	}

	Buffer.isBuffer = function (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
	    throw new TypeError('Arguments must be Buffers')

	  var x = a.length
	  var y = b.length
	  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function (list, totalLength) {
	  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

	  if (list.length === 0) {
	    return new Buffer(0)
	  } else if (list.length === 1) {
	    return list[0]
	  }

	  var i
	  if (totalLength === undefined) {
	    totalLength = 0
	    for (i = 0; i < list.length; i++) {
	      totalLength += list[i].length
	    }
	  }

	  var buf = new Buffer(totalLength)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	Buffer.byteLength = function (str, encoding) {
	  var ret
	  str = str + ''
	  switch (encoding || 'utf8') {
	    case 'ascii':
	    case 'binary':
	    case 'raw':
	      ret = str.length
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = str.length * 2
	      break
	    case 'hex':
	      ret = str.length >>> 1
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8ToBytes(str).length
	      break
	    case 'base64':
	      ret = base64ToBytes(str).length
	      break
	    default:
	      ret = str.length
	  }
	  return ret
	}

	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined

	// toString(encoding, start=0, end=buffer.length)
	Buffer.prototype.toString = function (encoding, start, end) {
	  var loweredCase = false

	  start = start >>> 0
	  end = end === undefined || end === Infinity ? this.length : end >>> 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase)
	          throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.equals = function (b) {
	  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max)
	      str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  return Buffer.compare(this, b)
	}

	// `get` will be removed in Node 0.13+
	Buffer.prototype.get = function (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` will be removed in Node 0.13+
	Buffer.prototype.set = function (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var byte = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(byte)) throw new Error('Invalid hex string')
	    buf[offset + i] = byte
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
	  return charsWritten
	}

	function asciiWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
	  return charsWritten
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
	  return charsWritten
	}

	function utf16leWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
	  return charsWritten
	}

	Buffer.prototype.write = function (string, offset, length, encoding) {
	  // Support both (string, offset, length, encoding)
	  // and the legacy (string, encoding, offset, length)
	  if (isFinite(offset)) {
	    if (!isFinite(length)) {
	      encoding = length
	      length = undefined
	    }
	  } else {  // legacy
	    var swap = encoding
	    encoding = offset
	    offset = length
	    length = swap
	  }

	  offset = Number(offset) || 0
	  var remaining = this.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	  encoding = String(encoding || 'utf8').toLowerCase()

	  var ret
	  switch (encoding) {
	    case 'hex':
	      ret = hexWrite(this, string, offset, length)
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8Write(this, string, offset, length)
	      break
	    case 'ascii':
	      ret = asciiWrite(this, string, offset, length)
	      break
	    case 'binary':
	      ret = binaryWrite(this, string, offset, length)
	      break
	    case 'base64':
	      ret = base64Write(this, string, offset, length)
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = utf16leWrite(this, string, offset, length)
	      break
	    default:
	      throw new TypeError('Unknown encoding: ' + encoding)
	  }
	  return ret
	}

	Buffer.prototype.toJSON = function () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  var res = ''
	  var tmp = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    if (buf[i] <= 0x7F) {
	      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
	      tmp = ''
	    } else {
	      tmp += '%' + buf[i].toString(16)
	    }
	  }

	  return res + decodeUtf8Char(tmp)
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  return asciiSlice(buf, start, end)
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len;
	    if (start < 0)
	      start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0)
	      end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start)
	    end = start

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    return Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    var newBuf = new Buffer(sliceLen, undefined, true)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	    return newBuf
	  }
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0)
	    throw new RangeError('offset is not uint')
	  if (offset + ext > length)
	    throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUInt8 = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	      ((this[offset + 1] << 16) |
	      (this[offset + 2] << 8) |
	      this[offset + 3])
	}

	Buffer.prototype.readInt8 = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80))
	    return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16) |
	      (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	      (this[offset + 1] << 16) |
	      (this[offset + 2] << 8) |
	      (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new TypeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new TypeError('index out of range')
	}

	Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = value
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else objectWriteUInt16(this, value, offset, true)
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else objectWriteUInt16(this, value, offset, false)
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = value
	  } else objectWriteUInt32(this, value, offset, true)
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else objectWriteUInt32(this, value, offset, false)
	  return offset + 4
	}

	Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = value
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else objectWriteUInt16(this, value, offset, true)
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else objectWriteUInt16(this, value, offset, false)
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else objectWriteUInt32(this, value, offset, true)
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else objectWriteUInt32(this, value, offset, false)
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new TypeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new TypeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert)
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert)
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function (target, target_start, start, end) {
	  var source = this

	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (!target_start) target_start = 0

	  // Copy 0 bytes; we're done
	  if (end === start) return
	  if (target.length === 0 || source.length === 0) return

	  // Fatal error conditions
	  if (end < start) throw new TypeError('sourceEnd < sourceStart')
	  if (target_start < 0 || target_start >= target.length)
	    throw new TypeError('targetStart out of bounds')
	  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
	  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length)
	    end = this.length
	  if (target.length - target_start < end - start)
	    end = target.length - target_start + start

	  var len = end - start

	  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < len; i++) {
	      target[i + target_start] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), target_start)
	  }
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new TypeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array get/set methods before overwriting
	  arr._get = arr.get
	  arr._set = arr.set

	  // deprecated, will be removed in node 0.13+
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function isArrayish (subject) {
	  return isArray(subject) || Buffer.isBuffer(subject) ||
	      subject && typeof subject === 'object' &&
	      typeof subject.length === 'number'
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    var b = str.charCodeAt(i)
	    if (b <= 0x7F) {
	      byteArray.push(b)
	    } else {
	      var start = i
	      if (b >= 0xD800 && b <= 0xDFFF) i++
	      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
	      for (var j = 0; j < h.length; j++) {
	        byteArray.push(parseInt(h[j], 16))
	      }
	    }
	  }
	  return byteArray
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(str)
	}

	function blitBuffer (src, dst, offset, length, unitSize) {
	  if (unitSize) length -= length % unitSize;
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length))
	      break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function decodeUtf8Char (str) {
	  try {
	    return decodeURIComponent(str)
	  } catch (err) {
	    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69).Buffer))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(50);


	// Declare internals

	var internals = {
	    delimiter: '&'
	};


	internals.stringify = function (obj, prefix) {

	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }

	    var values = [];

	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']'));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

	    var keys = [];

	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            keys = keys.concat(internals.stringify(obj[key], key));
	        }
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(50);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (!obj[key]) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            index <= options.arrayLimit) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Don't allow them to overwrite object prototype properties

	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return {};
	    }

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  if (!this._events || !this._events[event]) return [];
	  if (this._events[event].fn) return [this._events[event].fn];

	  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
	    ee[i] = this._events[event][i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  if (!this._events || !this._events[event]) return false;

	  var listeners = this._events[event]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this);

	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true);

	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
	  if (!this._events || !this._events[event]) return this;

	  var listeners = this._events[event]
	    , events = [];

	  if (fn) {
	    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
	      events.push(listeners);
	    }
	    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
	      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
	        events.push(listeners[i]);
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[event] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[event];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[event];
	  else this._events = {};

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the module.
	//
	EventEmitter.EventEmitter = EventEmitter;
	EventEmitter.EventEmitter2 = EventEmitter;
	EventEmitter.EventEmitter3 = EventEmitter;

	//
	// Expose the module.
	//
	module.exports = EventEmitter;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return function makePromise(environment) {

			var tasks = environment.scheduler;

			var objectCreate = Object.create ||
				function(proto) {
					function Child() {}
					Child.prototype = proto;
					return new Child();
				};

			/**
			 * Create a promise whose fate is determined by resolver
			 * @constructor
			 * @returns {Promise} promise
			 * @name Promise
			 */
			function Promise(resolver, handler) {
				this._handler = resolver === Handler ? handler : init(resolver);
			}

			/**
			 * Run the supplied resolver
			 * @param resolver
			 * @returns {Pending}
			 */
			function init(resolver) {
				var handler = new Pending();

				try {
					resolver(promiseResolve, promiseReject, promiseNotify);
				} catch (e) {
					promiseReject(e);
				}

				return handler;

				/**
				 * Transition from pre-resolution state to post-resolution state, notifying
				 * all listeners of the ultimate fulfillment or rejection
				 * @param {*} x resolution value
				 */
				function promiseResolve (x) {
					handler.resolve(x);
				}
				/**
				 * Reject this promise with reason, which will be used verbatim
				 * @param {Error|*} reason rejection reason, strongly suggested
				 *   to be an Error type
				 */
				function promiseReject (reason) {
					handler.reject(reason);
				}

				/**
				 * Issue a progress event, notifying all progress listeners
				 * @param {*} x progress event payload to pass to all listeners
				 */
				function promiseNotify (x) {
					handler.notify(x);
				}
			}

			// Creation

			Promise.resolve = resolve;
			Promise.reject = reject;
			Promise.never = never;

			Promise._defer = defer;
			Promise._handler = getHandler;

			/**
			 * Returns a trusted promise. If x is already a trusted promise, it is
			 * returned, otherwise returns a new trusted Promise which follows x.
			 * @param  {*} x
			 * @return {Promise} promise
			 */
			function resolve(x) {
				return isPromise(x) ? x
					: new Promise(Handler, new Async(getHandler(x)));
			}

			/**
			 * Return a reject promise with x as its reason (x is used verbatim)
			 * @param {*} x
			 * @returns {Promise} rejected promise
			 */
			function reject(x) {
				return new Promise(Handler, new Async(new Rejected(x)));
			}

			/**
			 * Return a promise that remains pending forever
			 * @returns {Promise} forever-pending promise.
			 */
			function never() {
				return foreverPendingPromise; // Should be frozen
			}

			/**
			 * Creates an internal {promise, resolver} pair
			 * @private
			 * @returns {Promise}
			 */
			function defer() {
				return new Promise(Handler, new Pending());
			}

			// Transformation and flow control

			/**
			 * Transform this promise's fulfillment value, returning a new Promise
			 * for the transformed result.  If the promise cannot be fulfilled, onRejected
			 * is called with the reason.  onProgress *may* be called with updates toward
			 * this promise's fulfillment.
			 * @param {function=} onFulfilled fulfillment handler
			 * @param {function=} onRejected rejection handler
			 * @deprecated @param {function=} onProgress progress handler
			 * @return {Promise} new promise
			 */
			Promise.prototype.then = function(onFulfilled, onRejected) {
				var parent = this._handler;
				var state = parent.join().state();

				if ((typeof onFulfilled !== 'function' && state > 0) ||
					(typeof onRejected !== 'function' && state < 0)) {
					// Short circuit: value will not change, simply share handler
					return new this.constructor(Handler, parent);
				}

				var p = this._beget();
				var child = p._handler;

				parent.chain(child, parent.receiver, onFulfilled, onRejected,
						arguments.length > 2 ? arguments[2] : void 0);

				return p;
			};

			/**
			 * If this promise cannot be fulfilled due to an error, call onRejected to
			 * handle the error. Shortcut for .then(undefined, onRejected)
			 * @param {function?} onRejected
			 * @return {Promise}
			 */
			Promise.prototype['catch'] = function(onRejected) {
				return this.then(void 0, onRejected);
			};

			/**
			 * Creates a new, pending promise of the same type as this promise
			 * @private
			 * @returns {Promise}
			 */
			Promise.prototype._beget = function() {
				var parent = this._handler;
				var child = new Pending(parent.receiver, parent.join().context);
				return new this.constructor(Handler, child);
			};

			// Array combinators

			Promise.all = all;
			Promise.race = race;

			/**
			 * Return a promise that will fulfill when all promises in the
			 * input array have fulfilled, or will reject when one of the
			 * promises rejects.
			 * @param {array} promises array of promises
			 * @returns {Promise} promise for array of fulfillment values
			 */
			function all(promises) {
				/*jshint maxcomplexity:8*/
				var resolver = new Pending();
				var pending = promises.length >>> 0;
				var results = new Array(pending);

				var i, h, x, s;
				for (i = 0; i < promises.length; ++i) {
					x = promises[i];

					if (x === void 0 && !(i in promises)) {
						--pending;
						continue;
					}

					if (maybeThenable(x)) {
						h = getHandlerMaybeThenable(x);

						s = h.state();
						if (s === 0) {
							h.fold(settleAt, i, results, resolver);
						} else if (s > 0) {
							results[i] = h.value;
							--pending;
						} else {
							unreportRemaining(promises, i+1, h);
							resolver.become(h);
							break;
						}

					} else {
						results[i] = x;
						--pending;
					}
				}

				if(pending === 0) {
					resolver.become(new Fulfilled(results));
				}

				return new Promise(Handler, resolver);

				function settleAt(i, x, resolver) {
					/*jshint validthis:true*/
					this[i] = x;
					if(--pending === 0) {
						resolver.become(new Fulfilled(this));
					}
				}
			}

			function unreportRemaining(promises, start, rejectedHandler) {
				var i, h, x;
				for(i=start; i<promises.length; ++i) {
					x = promises[i];
					if(maybeThenable(x)) {
						h = getHandlerMaybeThenable(x);

						if(h !== rejectedHandler) {
							h.visit(h, void 0, h._unreport);
						}
					}
				}
			}

			/**
			 * Fulfill-reject competitive race. Return a promise that will settle
			 * to the same state as the earliest input promise to settle.
			 *
			 * WARNING: The ES6 Promise spec requires that race()ing an empty array
			 * must return a promise that is pending forever.  This implementation
			 * returns a singleton forever-pending promise, the same singleton that is
			 * returned by Promise.never(), thus can be checked with ===
			 *
			 * @param {array} promises array of promises to race
			 * @returns {Promise} if input is non-empty, a promise that will settle
			 * to the same outcome as the earliest input promise to settle. if empty
			 * is empty, returns a promise that will never settle.
			 */
			function race(promises) {
				// Sigh, race([]) is untestable unless we return *something*
				// that is recognizable without calling .then() on it.
				if(Object(promises) === promises && promises.length === 0) {
					return never();
				}

				var h = new Pending();
				var i, x;
				for(i=0; i<promises.length; ++i) {
					x = promises[i];
					if (x !== void 0 && i in promises) {
						getHandler(x).visit(h, h.resolve, h.reject);
					}
				}
				return new Promise(Handler, h);
			}

			// Promise internals
			// Below this, everything is @private

			/**
			 * Get an appropriate handler for x, without checking for cycles
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandler(x) {
				if(isPromise(x)) {
					return x._handler.join();
				}
				return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
			}

			/**
			 * Get a handler for thenable x.
			 * NOTE: You must only call this if maybeThenable(x) == true
			 * @param {object|function|Promise} x
			 * @returns {object} handler
			 */
			function getHandlerMaybeThenable(x) {
				return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
			}

			/**
			 * Get a handler for potentially untrusted thenable x
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandlerUntrusted(x) {
				try {
					var untrustedThen = x.then;
					return typeof untrustedThen === 'function'
						? new Thenable(untrustedThen, x)
						: new Fulfilled(x);
				} catch(e) {
					return new Rejected(e);
				}
			}

			/**
			 * Handler for a promise that is pending forever
			 * @constructor
			 */
			function Handler() {}

			Handler.prototype.when
				= Handler.prototype.become
				= Handler.prototype.notify
				= Handler.prototype.fail
				= Handler.prototype._unreport
				= Handler.prototype._report
				= noop;

			Handler.prototype._state = 0;

			Handler.prototype.state = function() {
				return this._state;
			};

			/**
			 * Recursively collapse handler chain to find the handler
			 * nearest to the fully resolved value.
			 * @returns {object} handler nearest the fully resolved value
			 */
			Handler.prototype.join = function() {
				var h = this;
				while(h.handler !== void 0) {
					h = h.handler;
				}
				return h;
			};

			Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
				this.when({
					resolver: to,
					receiver: receiver,
					fulfilled: fulfilled,
					rejected: rejected,
					progress: progress
				});
			};

			Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
				this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
			};

			Handler.prototype.fold = function(f, z, c, to) {
				this.visit(to, function(x) {
					f.call(c, z, x, this);
				}, to.reject, to.notify);
			};

			/**
			 * Handler that invokes fail() on any handler it becomes
			 * @constructor
			 */
			function FailIfRejected() {}

			inherit(Handler, FailIfRejected);

			FailIfRejected.prototype.become = function(h) {
				h.fail();
			};

			var failIfRejected = new FailIfRejected();

			/**
			 * Handler that manages a queue of consumers waiting on a pending promise
			 * @constructor
			 */
			function Pending(receiver, inheritedContext) {
				Promise.createContext(this, inheritedContext);

				this.consumers = void 0;
				this.receiver = receiver;
				this.handler = void 0;
				this.resolved = false;
			}

			inherit(Handler, Pending);

			Pending.prototype._state = 0;

			Pending.prototype.resolve = function(x) {
				this.become(getHandler(x));
			};

			Pending.prototype.reject = function(x) {
				if(this.resolved) {
					return;
				}

				this.become(new Rejected(x));
			};

			Pending.prototype.join = function() {
				if (!this.resolved) {
					return this;
				}

				var h = this;

				while (h.handler !== void 0) {
					h = h.handler;
					if (h === this) {
						return this.handler = cycle();
					}
				}

				return h;
			};

			Pending.prototype.run = function() {
				var q = this.consumers;
				var handler = this.join();
				this.consumers = void 0;

				for (var i = 0; i < q.length; ++i) {
					handler.when(q[i]);
				}
			};

			Pending.prototype.become = function(handler) {
				if(this.resolved) {
					return;
				}

				this.resolved = true;
				this.handler = handler;
				if(this.consumers !== void 0) {
					tasks.enqueue(this);
				}

				if(this.context !== void 0) {
					handler._report(this.context);
				}
			};

			Pending.prototype.when = function(continuation) {
				if(this.resolved) {
					tasks.enqueue(new ContinuationTask(continuation, this.handler));
				} else {
					if(this.consumers === void 0) {
						this.consumers = [continuation];
					} else {
						this.consumers.push(continuation);
					}
				}
			};

			Pending.prototype.notify = function(x) {
				if(!this.resolved) {
					tasks.enqueue(new ProgressTask(x, this));
				}
			};

			Pending.prototype.fail = function(context) {
				var c = typeof context === 'undefined' ? this.context : context;
				this.resolved && this.handler.join().fail(c);
			};

			Pending.prototype._report = function(context) {
				this.resolved && this.handler.join()._report(context);
			};

			Pending.prototype._unreport = function() {
				this.resolved && this.handler.join()._unreport();
			};

			/**
			 * Wrap another handler and force it into a future stack
			 * @param {object} handler
			 * @constructor
			 */
			function Async(handler) {
				this.handler = handler;
			}

			inherit(Handler, Async);

			Async.prototype.when = function(continuation) {
				tasks.enqueue(new ContinuationTask(continuation, this));
			};

			Async.prototype._report = function(context) {
				this.join()._report(context);
			};

			Async.prototype._unreport = function() {
				this.join()._unreport();
			};

			/**
			 * Handler that wraps an untrusted thenable and assimilates it in a future stack
			 * @param {function} then
			 * @param {{then: function}} thenable
			 * @constructor
			 */
			function Thenable(then, thenable) {
				Pending.call(this);
				tasks.enqueue(new AssimilateTask(then, thenable, this));
			}

			inherit(Pending, Thenable);

			/**
			 * Handler for a fulfilled promise
			 * @param {*} x fulfillment value
			 * @constructor
			 */
			function Fulfilled(x) {
				Promise.createContext(this);
				this.value = x;
			}

			inherit(Handler, Fulfilled);

			Fulfilled.prototype._state = 1;

			Fulfilled.prototype.fold = function(f, z, c, to) {
				runContinuation3(f, z, this, c, to);
			};

			Fulfilled.prototype.when = function(cont) {
				runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
			};

			var errorId = 0;

			/**
			 * Handler for a rejected promise
			 * @param {*} x rejection reason
			 * @constructor
			 */
			function Rejected(x) {
				Promise.createContext(this);

				this.id = ++errorId;
				this.value = x;
				this.handled = false;
				this.reported = false;

				this._report();
			}

			inherit(Handler, Rejected);

			Rejected.prototype._state = -1;

			Rejected.prototype.fold = function(f, z, c, to) {
				to.become(this);
			};

			Rejected.prototype.when = function(cont) {
				if(typeof cont.rejected === 'function') {
					this._unreport();
				}
				runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
			};

			Rejected.prototype._report = function(context) {
				tasks.afterQueue(new ReportTask(this, context));
			};

			Rejected.prototype._unreport = function() {
				this.handled = true;
				tasks.afterQueue(new UnreportTask(this));
			};

			Rejected.prototype.fail = function(context) {
				Promise.onFatalRejection(this, context === void 0 ? this.context : context);
			};

			function ReportTask(rejection, context) {
				this.rejection = rejection;
				this.context = context;
			}

			ReportTask.prototype.run = function() {
				if(!this.rejection.handled) {
					this.rejection.reported = true;
					Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
				}
			};

			function UnreportTask(rejection) {
				this.rejection = rejection;
			}

			UnreportTask.prototype.run = function() {
				if(this.rejection.reported) {
					Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
				}
			};

			// Unhandled rejection hooks
			// By default, everything is a noop

			// TODO: Better names: "annotate"?
			Promise.createContext
				= Promise.enterContext
				= Promise.exitContext
				= Promise.onPotentiallyUnhandledRejection
				= Promise.onPotentiallyUnhandledRejectionHandled
				= Promise.onFatalRejection
				= noop;

			// Errors and singletons

			var foreverPendingHandler = new Handler();
			var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

			function cycle() {
				return new Rejected(new TypeError('Promise cycle'));
			}

			// Task runners

			/**
			 * Run a single consumer
			 * @constructor
			 */
			function ContinuationTask(continuation, handler) {
				this.continuation = continuation;
				this.handler = handler;
			}

			ContinuationTask.prototype.run = function() {
				this.handler.join().when(this.continuation);
			};

			/**
			 * Run a queue of progress handlers
			 * @constructor
			 */
			function ProgressTask(value, handler) {
				this.handler = handler;
				this.value = value;
			}

			ProgressTask.prototype.run = function() {
				var q = this.handler.consumers;
				if(q === void 0) {
					return;
				}

				for (var c, i = 0; i < q.length; ++i) {
					c = q[i];
					runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
				}
			};

			/**
			 * Assimilate a thenable, sending it's value to resolver
			 * @param {function} then
			 * @param {object|function} thenable
			 * @param {object} resolver
			 * @constructor
			 */
			function AssimilateTask(then, thenable, resolver) {
				this._then = then;
				this.thenable = thenable;
				this.resolver = resolver;
			}

			AssimilateTask.prototype.run = function() {
				var h = this.resolver;
				tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

				function _resolve(x) { h.resolve(x); }
				function _reject(x)  { h.reject(x); }
				function _notify(x)  { h.notify(x); }
			};

			function tryAssimilate(then, thenable, resolve, reject, notify) {
				try {
					then.call(thenable, resolve, reject, notify);
				} catch (e) {
					reject(e);
				}
			}

			// Other helpers

			/**
			 * @param {*} x
			 * @returns {boolean} true iff x is a trusted Promise
			 */
			function isPromise(x) {
				return x instanceof Promise;
			}

			/**
			 * Test just enough to rule out primitives, in order to take faster
			 * paths in some code
			 * @param {*} x
			 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
			 */
			function maybeThenable(x) {
				return (typeof x === 'object' || typeof x === 'function') && x !== null;
			}

			function runContinuation1(f, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}

				Promise.enterContext(h);
				tryCatchReject(f, h.value, receiver, next);
				Promise.exitContext();
			}

			function runContinuation3(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}

				Promise.enterContext(h);
				tryCatchReject3(f, x, h.value, receiver, next);
				Promise.exitContext();
			}

			function runNotify(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.notify(x);
				}

				Promise.enterContext(h);
				tryCatchReturn(f, x, receiver, next);
				Promise.exitContext();
			}

			/**
			 * Return f.call(thisArg, x), or if it throws return a rejected promise for
			 * the thrown exception
			 */
			function tryCatchReject(f, x, thisArg, next) {
				try {
					next.become(getHandler(f.call(thisArg, x)));
				} catch(e) {
					next.become(new Rejected(e));
				}
			}

			/**
			 * Same as above, but includes the extra argument parameter.
			 */
			function tryCatchReject3(f, x, y, thisArg, next) {
				try {
					f.call(thisArg, x, y, next);
				} catch(e) {
					next.become(new Rejected(e));
				}
			}

			/**
			 * Return f.call(thisArg, x), or if it throws, *return* the exception
			 */
			function tryCatchReturn(f, x, thisArg, next) {
				try {
					next.notify(f.call(thisArg, x));
				} catch(e) {
					next.notify(e);
				}
			}

			function inherit(Parent, Child) {
				Child.prototype = objectCreate(Parent.prototype);
				Child.prototype.constructor = Child;
			}

			function noop() {}

			return Promise;
		};
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(77)));


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

		var Queue = __webpack_require__(78);

		// Credit to Twisol (https://github.com/Twisol) for suggesting
		// this type of extensible queue + trampoline approach for next-tick conflation.

		/**
		 * Async task scheduler
		 * @param {function} async function to schedule a single async function
		 * @constructor
		 */
		function Scheduler(async) {
			this._async = async;
			this._queue = new Queue(15);
			this._afterQueue = new Queue(5);
			this._running = false;

			var self = this;
			this.drain = function() {
				self._drain();
			};
		}

		/**
		 * Enqueue a task
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.enqueue = function(task) {
			this._add(this._queue, task);
		};

		/**
		 * Enqueue a task to run after the main task queue
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.afterQueue = function(task) {
			this._add(this._afterQueue, task);
		};

		/**
		 * Drain the handler queue entirely, and then the after queue
		 */
		Scheduler.prototype._drain = function() {
			runQueue(this._queue);
			this._running = false;
			runQueue(this._afterQueue);
		};

		/**
		 * Add a task to the q, and schedule drain if not already scheduled
		 * @param {Queue} queue
		 * @param {{run:function}} task
		 * @private
		 */
		Scheduler.prototype._add = function(queue, task) {
			queue.push(task);
			if(!this._running) {
				this._running = true;
				this._async(this.drain);
			}
		};

		/**
		 * Run all the tasks in the q
		 * @param queue
		 */
		function runQueue(queue) {
			while(queue.length > 0) {
				queue.shift().run();
			}
		}

		return Scheduler;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(77)));


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var require;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

		// Sniff "best" async scheduling option
		// Prefer process.nextTick or MutationObserver, then check for
		// vertx and finally fall back to setTimeout

		/*jshint maxcomplexity:6*/
		/*global process,document,setTimeout,MutationObserver,WebKitMutationObserver*/
		var nextTick, MutationObs;

		if (typeof process !== 'undefined' && process !== null &&
			typeof process.nextTick === 'function') {
			nextTick = function(f) {
				process.nextTick(f);
			};

		} else if (MutationObs =
			(typeof MutationObserver === 'function' && MutationObserver) ||
			(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver)) {
			nextTick = (function (document, MutationObserver) {
				var scheduled;
				var el = document.createElement('div');
				var o = new MutationObserver(run);
				o.observe(el, { attributes: true });

				function run() {
					var f = scheduled;
					scheduled = void 0;
					f();
				}

				return function (f) {
					scheduled = f;
					el.setAttribute('class', 'x');
				};
			}(document, MutationObs));

		} else {
			nextTick = (function(cjsRequire) {
				var vertx;
				try {
					// vert.x 1.x || 2.x
					vertx = __webpack_require__(76);
				} catch (ignore) {}

				if (vertx) {
					if (typeof vertx.runOnLoop === 'function') {
						return vertx.runOnLoop;
					}
					if (typeof vertx.runOnContext === 'function') {
						return vertx.runOnContext;
					}
				}

				// capture setTimeout to avoid being caught by fake timers
				// used in time based tests
				var capturedSetTimeout = setTimeout;
				return function (t) {
					capturedSetTimeout(t, 0);
				};
			}(require));
		}

		return nextTick;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(77)));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* (ignored) */

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		/**
		 * Circular queue
		 * @param {number} capacityPow2 power of 2 to which this queue's capacity
		 *  will be set initially. eg when capacityPow2 == 3, queue capacity
		 *  will be 8.
		 * @constructor
		 */
		function Queue(capacityPow2) {
			this.head = this.tail = this.length = 0;
			this.buffer = new Array(1 << capacityPow2);
		}

		Queue.prototype.push = function(x) {
			if(this.length === this.buffer.length) {
				this._ensureCapacity(this.length * 2);
			}

			this.buffer[this.tail] = x;
			this.tail = (this.tail + 1) & (this.buffer.length - 1);
			++this.length;
			return this.length;
		};

		Queue.prototype.shift = function() {
			var x = this.buffer[this.head];
			this.buffer[this.head] = void 0;
			this.head = (this.head + 1) & (this.buffer.length - 1);
			--this.length;
			return x;
		};

		Queue.prototype._ensureCapacity = function(capacity) {
			var head = this.head;
			var buffer = this.buffer;
			var newBuffer = new Array(capacity);
			var i = 0;
			var len;

			if(head === 0) {
				len = this.length;
				for(; i<len; ++i) {
					newBuffer[i] = buffer[i];
				}
			} else {
				capacity = buffer.length;
				len = this.tail;
				for(; head<capacity; ++i, ++head) {
					newBuffer[i] = buffer[head];
				}

				for(head=0; head<len; ++i, ++head) {
					newBuffer[i] = buffer[head];
				}
			}

			this.buffer = newBuffer;
			this.head = 0;
			this.tail = this.length;
		};

		return Queue;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(77)));


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports.read = function(buffer, offset, isLE, mLen, nBytes) {
	  var e, m,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = -7,
	      i = isLE ? (nBytes - 1) : 0,
	      d = isLE ? -1 : 1,
	      s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity);
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	      i = isLE ? 0 : (nBytes - 1),
	      d = isLE ? 1 : -1,
	      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

	  buffer[offset + i - d] |= s * 128;
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * isArray
	 */

	var isArray = Array.isArray;

	/**
	 * toString
	 */

	var str = Object.prototype.toString;

	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */

	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS)
				return 62 // '+'
			if (code === SLASH)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}(false ? (this.base64js = {}) : exports))


/***/ }
/******/ ])