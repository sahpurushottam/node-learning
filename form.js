const http = require("http");
const fs = require("fs");
const { buffer, text } = require("stream/consumers");
const queryString = require("querystring");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "text/html" });

//     if (req.url == "/") {
//       resp.write(`
//         <form action="/submit" method="post">
//             <input type="text" placeholder="Enter Your Fisrt Name" />
//             <input type="text" placeholder="Enter Your Last Name" />
//             <button>Submit</button>
//         </form>
//     `);
//     } else if (req.url == "/submit") {
//       resp.write("<h1>Form submit successfully </h1>");
//     } else {
//       resp.write("<h1>other page</h1>");
//     }

//     resp.end();
//   })
//   .listen(4800);

http
  .createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "content-Type": "text/plain" });
        r;

        resp.end("Internal server error");

        return;
      }
      resp.writeHead(200, { "content-type": "text/html" });
      if (req.url == "/") {


        
        resp.write(data);
      } else if (req.url == "/submit") {
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });

        req.on("end", () => {
          let rowData = Buffer.concat(dataBody).toString();
          let readableData = queryString.parse(rowData);
          console.log(readableData);
          let dataString =
            "My Name is " +
            readableData.name +
            "and my email id is " +
            readableData.email;
          console.log(dataString);
          // fs.writeFileSync("text/"+readableData.name+".txt",dataString)
          // console.log("created");

          fs.writeFile(
            "text/" + readableData.name + ".txt",
            dataString,
            "utf-8",
            (error) => {
              if (error) {
                resp.end("interal server error");
                return false;
              } else {
                console.log("created");
              }
            },
          );
        });
        resp.write("<h1>Form submit successfully </h1>");
      } else {
        resp.write("<h1>Other Page");
      }

      resp.end();
    });
  })
  .listen(4800);
