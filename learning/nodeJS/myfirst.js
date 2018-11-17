var http = require('http');

// 'Quebra' url em partes utilizáveis
var url  = require('url');

// Adiciona um módulo
var dt = require('./myfirstmodule');

// Gerencia arquivos
var fs = require('fs');

http.createServer(function (req,res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
	if(err){
	    res.writeHead(404, {'Content-Type': 'text/html'});
	    return res.end("404 not found");
	}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	return res.end();
    });
}).listen(8080);
