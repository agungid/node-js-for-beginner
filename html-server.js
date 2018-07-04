var http = require('http');
var port = 8888;

http.createServer(function (req, res) {
    

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Page <b>Home</b>');
    } else if (req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Page <b>About</b>');
    } else if (req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Page <b>Contact</b>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<b>Error 404</b>: Page Not Found!<br/>');
    }
    // res.write("Path request: "+req.url);
    res.end();
}).listen(port, function () {
    console.log("server running on http://localhost:"+port);
});

