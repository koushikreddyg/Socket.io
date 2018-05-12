const path=require('path');
const http= require('http');
const express=require('express');
const socketIO=require('socket.io');

const app=express();

const publicPath=path.join(__dirname,'..','public');

const port=process.env.PORT||3000

var server=http.createServer(app);

var io= socketIO(server);

app.use(express.static(publicPath))

io.on('connection',(socket)=>{
    console.log('new user connected');
   
    socket.on('createMessage',(message)=>{
        console.log('createMessage', message);
        io.emit('newMessage',{
            from: message.from,
            message: message.message,
            createAt: new Date().getTime()
        })
    })
    socket.on('disconnect',()=>{
        console.log('server is disconnected');
    })
})
server.listen(port,()=>{
    console.log(`server is up on ${port}`)
})
