const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
// essa parte faz com que retorne o registro novo
Todo.updateOptions({new:true,runValidator:true}) 

module.exports = Todo