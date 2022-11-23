var http = require('http');

http.createServer(function (req, res){

    res.writeHead(200,{'content-Type': 'text/html'})
    res.end('<center> <h1> Boa Tarde!</1></center>');
}).listen(80);
