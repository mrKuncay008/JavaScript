var http = require('http');
var dom = require('./dom1');
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(dom.kunc());
    res.end('test');
}).listen(8080);