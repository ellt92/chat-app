var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var acceptConnections = require('./accept.js');
var state = require('./app-state/script.js')();

app.use('/', express.static('static/dist'));

acceptConnections(io, state);

http.listen(3000, function(){
    console.log('Listening on *:3000');
});
