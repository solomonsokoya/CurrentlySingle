var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const PORT = process.env.PORT || 3009;

server.listen(PORT);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log("This is socket.id:" + socket.id )
  socket.on('chat message', function(msg){
     socket.emit("chat message" , msg)
    console.log('message: ' + msg);
  })

})


