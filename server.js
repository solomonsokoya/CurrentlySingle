var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.send("hii")
  // res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log("This is socket.id:" + socket.id )
  socket.on('update', () => io.emit('update'))

  socket.on('send messgae', function (data){
    io.emit('new messgae', {msg: data});
  })

})


