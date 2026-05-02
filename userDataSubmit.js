// const queryString = require("queryString");
const queryString = require("querystring");

function userDataSubmit(req,resp){
    let dataBody = [];

    req.on("data", (chunk)=>{
        dataBody.push(chunk);
    });


    req.on("end", ()=>{
        let rawData = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(rawData);

        let dataString = "my Name is " + readableData.name+ "and my email id "+ readableData.email;

        console.log(dataString);

    })

    resp.write("hello")
}


module.exports = userDataSubmit;