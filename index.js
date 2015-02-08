var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var fs = require('fs');
var pg = require('pg');
var config = require(__dirname + '/config/default.json');

var app = express();

var connectionString = config.database.dialect + "://" 
	+ config.database.username + ":" 
	+ config.database.password + "@"
	+ config.database.host + "/"
	+ config.database.database;

/* Save the connection string to the app object so it's available throughout the app */
app.connectionString = connectionString;

/* Setup the views */
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

/* Logger */
app.use(morgan('combined'));

/* Host static assets */
app.use(express.static('./public'));

/* Initialize live-reload. TODO: gate this based on environment */
app.use(require('connect-livereload')({
	port: 35729
}));

/* Simple db demonstration to make sure we are connecting correctly */
app.get('/dbtest', function (req, res) {
	pg.connect(connectionString, function(err, client, done) {
		if(err) {
			return console.error('error fetching client from pool', err);
		}
		client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    		//call `done()` to release the client back to the pool
    		done();
    		if(err) {
    			return console.error('error running query', err);
    		}
    		console.log(result.rows[0].number);
    		res.writeHead(200, {'content-type': 'text/plain'});
        	res.end('You are visitor number ' + result.rows[0].number);
    		//output: 1
    	});
	});
});

/* Load everything in the controllers folder. This means we can use routing in the controller */
fs.readdirSync('./controllers').forEach(function (file) {
	require('./controllers/' + file)(app);
});

/* After controller routes are loaded we add a catch-all */
app.all('*', function (req, res) {
	res.render('index', { assets: 'main' });
});

/* Start Server */
var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});

/* We export here in case we want to run this inside another app and to load for testing */
exports.app = app;