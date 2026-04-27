const http = require("http");
const fs = require("fs");
const { error } = require("console");

http
  .createServer((req, resp) => {
    fs.readFile("html/index.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "content-type": "text/plain" });

        resp.write("Internet Server Error");
        resp.end();
        return;
      }
      resp.writeHead(200, { "content-type": "text/html" });
      resp.write(data);
      resp.end();
    });
  })
  .listen(3200);
