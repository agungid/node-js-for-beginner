var http = require('http');
var port = 8081;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write('Hello <b>World</b>!');
    res.write("URL Request: "+req.url)
    res.end();
}).listen(port, function () {
    console.log("server running on http://localhost:"+port);
});

