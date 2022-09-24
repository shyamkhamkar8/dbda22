
const { fstat }=require('fs');
const http=require('http');  // http library

var server=http.createServer((request,response)=>{          
    console.log ("request is received from client");
    response.write("<h1>welcome</h1>");
    response.write("<hr/>");
    response.write("<ol><li>DBDA</li><li>legends</li> </ol>");
    response.end();
});
server.listen(3000);
console.log("HTTP server is listening on a port 3000");


