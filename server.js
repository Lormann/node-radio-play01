var config = require('./config');
var api = require('./api_def');
var db = require('./models/db');
var http = require('http');
var sio = require('socket.io');
var express=require('express');
var fs = require('fs');

var app=express();

app.set('views', config.paths.views);
app.set('view engine', 'ejs');

app.use(express.static(config.paths.public_root));

// == Route - Begin
app.get('/', function (req, res) {
  res.send('Hello World! - v01');
  console.log("[RS] get /");
});

app.get('/version', function (req, res) {
  res.send('RS version v01');
  console.log("[RS] get /version");

});

app.get('/socket.html', function (req, res) {
  fs.readFile(config.paths.root+"/socket.html", function(error, data){
     
     //send socket.html back to client browser
      res.set('Content-Type', 'text/html');
      res.send(new Buffer(data));
      
  });
  
  console.log("[RS] get /socket html");

});

// == Route - end 

var server = http.createServer(app);

server.listen(config.port, function() {
	var addr = server.address();
	console.log("[RS] Listening on port " +addr.address+":"+ addr.port+"("+addr.family+")");
});

var io = sio.listen(server);

// socket io -- begin




// socket io -- end
