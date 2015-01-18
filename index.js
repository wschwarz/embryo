var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var fs = require('fs');


var app = express();

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

// app.get('/', function (req, res) {
// 	// res.send('Hello World!');
// 	res.render('index', {title: 'hey', authors: ['Bob', 'Linda', 'Jane']});
// });

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