var http = require("http");

//var host = "127.0.0.1";
var host = "localhost";
var port = "80";

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  response.write("port :: " + port + " / host :: " + host );
  response.end("\nHello wooki");
}).listen(port, host, function() {
  console.log("host :: " + host + " / Server Running :: " + port + `${host}:${port}`);
});
