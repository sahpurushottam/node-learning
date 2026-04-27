const { REFUSED } = require('dns');
const http = require('http');

const userData =[
    {
        name: 'Purushottam kumar',
        age:22,
        email:'pk@gmail.com'
    },
    {
        name: 'Ajit kumar',
        age:23,
        email:'ajit@gmail.com'
    },
    {
        name: 'Abhishek kumar',
        age:23,
        email:'ab@gmail.com'
    }
    
]

http.createServer(( req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(6600);