const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');

const server = express() // cada vez que chama esse comando temos um diferente do outro

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

server.listen(port,function(){
    console.log(`Servidor rodando em http://localhost:${port}`)    
})

module.exports = server



