const fs = require('fs');
// fs.readFile("text/petter.txt","utf-8",(error,data)=>{
//     if(error){
//         return
//     }
//     console.log(data);
// })

const data = fs.readFileSync("text/Purushottam Kumar.txt","utf-8");
console.log(data);


console.log("end the code ");
