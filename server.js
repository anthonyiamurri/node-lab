// server.js
var http = require("http");
var mod = require("./tasks");

http.createServer(function(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(mod.task);
response.end();
}).listen(3000);
