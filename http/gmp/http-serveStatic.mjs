import http from "http";
import fs from "fs";

const server = http.createServer();
const PORT = Number(process.env.PORT) || 3005;
const indexHtml = fs.readFileSync("./index.html");
const notFound = fs.readFileSync("./notFound.html");

const makeBlue = text => `\x1b[34m${text}\x1b[0m`;

server.on("request", (req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    return res.end(indexHtml.toString());
  }

  if (url === "/user" && method === "GET") {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ name: "Alex", age: 22 }));
  }

  res.statusCode = 404;
  return res.end(notFound.toString());
});

server.listen(PORT);
process.stdout.write(`Server running on port ${makeBlue(PORT)}`);
