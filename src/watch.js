var fs = require('fs')
var filePath = 'test.txt'
var file = fs.readFileSync(filePath, 'utf8')

const app = require('express')();
const http = require('http').createServer(app);
const optionss={
    cors:true,
    origins:["*"],
   }
const io = require('socket.io')(http, optionss);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('messages', file)
    fs.watch(filePath, function(curr, prev){
        console.log("el archivo cambio")
        file = fs.readFileSync(filePath, 'utf8')
        socket.emit('messages', file)
        console.log("el archivo ahora contine", file)
        
})
  });

http.listen(5005, () => {
  console.log('listening Socket *:5005');
});

fs.watch(filePath, function(curr, prev){
        console.log("el archivo cambio")
        file = fs.readFileSync(filePath, 'utf8')
        console.log("el archivo ahora contine", file)
        
})