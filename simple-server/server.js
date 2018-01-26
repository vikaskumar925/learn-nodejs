 var http = require('http');
 http.createServer(function(request,response){
     homeRoute(request,response);
 }).listen(1337);
 console.log("Server Running at 127.0.0.1:1337");
function homeRoute(request,response){
    if (request.url ==='/'){
        response.writeHead('200',{'Content-type':'text/plain'});
        response.write("Header\n");
        response.write("search\n");
        response.write("Footer\n");
        response.end('Hello World\n');
    }
}
function userRoute(request, response){
    var userName = request.url.replace('/','');
}
