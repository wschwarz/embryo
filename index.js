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

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(morgan('combined'));
app.use(express.static('./public'));

app.use(require('connect-livereload')({
	port: 35729
}));

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

fs.readdirSync('./controllers').forEach(function (file) {
	require('./controllers/' + file)(app);
});

app.all('*', function (req, res) {
	res.render('index', { assets: 'main' });
});

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});