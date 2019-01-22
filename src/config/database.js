// serve para mapeamento dos objetos para o documento do mongo..
const mongoose = require ('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo');
//module.exports = mongoose.connect('mongodb://elvishuges:senha123@ds255262.mlab.com:55262/testes');