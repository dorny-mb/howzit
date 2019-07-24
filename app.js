const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http)


// static folder
app.use('/public',express.static(path.join(__dirname,'src')))


// middleware init
app.use(ejsLayout);
app.set('view engine','ejs');

app.get('/',(req,res)=> res.render('index'))


const PORT = process.env.PORT || 5000;

http.listen(PORT,()=> console.log(`Server running on ${PORT}`));

io.on('connection',(socket)=>{
    console.log('a user is connected...')
    socket.on('disconnect',()=>{
        console.log('a user left');
    })
})