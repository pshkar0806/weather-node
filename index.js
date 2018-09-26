var express = require('express');
var router = require('./server/routes/routes.js');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

app.use('/', router);

var port = 8000;

app.listen(port, function() {
	console.log('NeoSoft server running at localhost: ' + port);
});

module.exports = app;