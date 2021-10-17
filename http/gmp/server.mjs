import http from "http";

const server = http.createServer();
const PORT = Number(process.env.PORT) || 3005;

const makeBlue = text => `\x1b[34m${text}\x1b[0m`;

server.on("request", (req, res) => {
  const { url } = req;

  res.setHeader("Content-Type", "application/json");
  res.status = 200; // 200 OK is the default status

  res.end(JSON.stringify({ url }));
});

server.listen(PORT);
process.stdout.write(`Server running on port ${makeBlue(PORT)}`);
