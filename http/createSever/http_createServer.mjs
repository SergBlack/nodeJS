import fs from "fs";
import http from "http";

const indexHtml = fs.readFileSync("./index.html");
const notFound = fs.readFileSync("./notFound.html");

http.createServer(((req, res) => {
  if (req.url === "/") {
    res.end(indexHtml);
  } else {
    res.end(notFound);
  }
})).listen(3003);
