const fs = require("fs");


// fs.writeFileSync("files/banana.txt","This is a fruit");


// fs.unlinkSync("files/banana.txt") 

const data = fs.readFileSync("files/apple.txt","utf8");

console.log(data);


// fs.appendFileSync("files/apple.txt"," and this is a good for health")



