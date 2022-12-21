var http = require ('http');
var n = require('./moduloUm');
var dia = require('./moduloData');

//mudando o servidor 
http.createServer (function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<b>Aula de Node<b> <br>');
    res.write('<i>Aluna: </i> ');
    res.write(n.nome()+'<br>');
    //res.write(Date());
    res.write(dia.diaDaSemana()+'<br>');
    res.end('Bom dia!');

}).listen(80);

