const http = require("http");


let data = {"name" : "Deepanshu"}

const server = http.createServer((req,res)=>{
    console.log("server has been started");
    // console.log(req)
    // console.log(res)
    // res.end("Hello World")
    // res.end("<h1>Hello World</h1>");
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(data))
});

server.listen(8080);