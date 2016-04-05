var config = require('./config');
var api = require('./api_def');
var db = require('./models/db');
var http = require('http');
var sio = require('socket.io');
var express=require('express');

var app=express();

app.set('views', config.paths.views);
app.set('view engine', 'ejs');

app.use(express.static(config.paths.public_root));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(config.port, function () {
  console.log('Example app listening on port ',config.port);
});
/*

var server = http.createServer(app);


server.listen(config.port, function() {
	var addr = server.address();
	console.log("[RS] Listening on port " + addr.port);
});

var io = sio.listen(server);

*/