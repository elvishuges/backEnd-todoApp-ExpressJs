const express = require('express');
const server = express()


module.exports = function(server){
   
    const router = express.Router()
    server.use('/api',router) // todas as api's vão iniciar com \api
    
    const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')
    
}