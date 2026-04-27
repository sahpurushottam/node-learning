
const http = require('http');
const arg = process.argv;
const pot =  arg[2];


http.createServer((req,resp)=>{
    resp.write("<h1>Testing input form cmd");
    resp.end();
}).listen(pot);