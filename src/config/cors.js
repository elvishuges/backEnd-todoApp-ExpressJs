// aqui estamos adicionando as respostas no cabeçalhos do browser
module.exports = function(req,res,next){
   res.header('Acess-Controll-Allow-Origin','*')
   res.header('Acess-Controll-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE')
   res.header('Acess-Controll-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
   next() // continua o fluxo
}