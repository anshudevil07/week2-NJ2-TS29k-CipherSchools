let http = require('http');

let server = http.createServer((req,res)=>{
    // console.log(req);
    // console.log(res);
    console.log(req.url);
    if(req.url === '/home'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end('<h1>Welcome User</h1>');
    } else if(req.url === '/about'){
        res.writeHead(200,{'Content-type':'text/plain'});
        res.end('<h1>Lorem ipsum</h1>');
    } else if(req.url === '/data')
    {
        res.writeHead(200,{'Content-type':'application/json'});
        res.end("{'name':'Shivam'}");
    } else {
        res.writeHead(404,{'Content-type':'text/html'});
        res.end("<h1>Page Not Found</h1>");
    }

})

server.listen(8000,'127.0.0.1',() => {
    console.log("Started the server.... Listening at port 8000");
})