const http = require("http");
const fs = require("fs");

const server = http.createServer();
// eslint-disable-next-line no-unused-varsgit
const [exec, path, PORT, filePath] = process.argv;

server.on("request", ((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });

  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });

  readStream.pipe(res);
}));

server.listen(PORT);
process.stdout.write(`Server running on port: ${PORT}`);
