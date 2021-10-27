const http = require("http");
const { Transform } = require("stream");

const server = http.createServer();
const PORT = Number(process.argv[2]) || 3000;

const upperTransform = new Transform({
  transform(chunk, encoding, callback) {
    const data = chunk.toString().toUpperCase();

    callback(null, data);
  }
});

server.on("request", ((req, res) => {
  const { method } = req;

  if (method === "POST") {
    return req.pipe(upperTransform).pipe(res);
  }

  return res.end("Send POST");
}));

server.listen(PORT);
process.stdout.write(`Server running on port: ${PORT}\n`);
