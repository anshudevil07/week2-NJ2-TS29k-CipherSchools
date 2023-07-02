let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });

    // Asynchronous
    let readStream = fs.createReadStream(__dirname + "/index.html");
    // res.end()
    readStream.pipe(res);
    
  } else if (req.url === "/data") {
    res.writeHead(200, { "Content-type": "application/json" });
    let data = [
      { name: "Pizza Hut", description: "Best Pizza", id: 1 },
      { name: "Dominos", description: "Best pizza in town", id: 2 },
    ];
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    let readStream = fs.createReadStream(__dirname + "/404.html");
    readStream.pipe(res);
  }
});

server.listen(5500, "127.0.0.1", () => {
  console.log("Listening on PORT 5500");
});
