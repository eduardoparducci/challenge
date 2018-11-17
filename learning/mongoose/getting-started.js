// Manipulação de arquivos do computador
var fs = require('fs')
// Acesso ao Banco de Dados
var mongoose = require('mongoose');

// função Async para inserir documento em banco de dados 'world' existente
async function inserir(){

    var db = mongoose.connection;
    var dir_db = 'mongodb://127.0.0.1/world'
    
    console.log('Conexao com Banco de Dados')
    mongoose.connect(dir_db,{ useNewUrlParser: true });

    db.on('error', console.error.bind(console, 'console error'));
    db.once('open', function(){
    console.log("OK!");
    });
}

inserir()
