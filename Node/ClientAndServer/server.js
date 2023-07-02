var http = require('http');

let server = http.createServer((req,res)=>{
    // console.log(req);
    // console.log(res);

    res.writeHead(200,{'Content-type':'text/html'});
    res.end("<h1>Hello from the other side<h1>");
    res.end("Hello");
})

server.listen(5500,'127.0.0.1',() => {
    console.log("Started the server.... Listening at port 5500");
})