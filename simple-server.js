var http = require('http');
var port = 8888;

var server = http.createServer(function (req, res) {
    res.end("Hi, selamat datang di nodejs <b>test</b>");
}).listen(port, function(){
    console.log("server running on http://localhost:"+port);
});

