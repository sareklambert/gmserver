var dgram = require('dgram');

var server = dgram.createSocket('udp4');

/*server.on('connection', function(socket) {
    
})*/

server.on('message', function(message, rinfo) {
    console.log(message);
})

/*server.on('close', function() {
    server.close();
})*/

server.bind(8080);

