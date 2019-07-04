var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

console.log("read code?");

io.on('connection', function (socket) {
  console.log('connection');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});