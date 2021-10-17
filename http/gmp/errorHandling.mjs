import http from "http";

const httpServer = http.createServer();
const PORT = Number(process.env.PORT) || 3005;

const makeBlue = text => `\x1b[34m${text}\x1b[0m`;

const handleRequestError = (err) => `Request error: ${err}`;
const handleResponseError = (err) => `Response error: ${err}`;
const handleServerError = (err) => `Server error: ${err}`;

httpServer
  .on("request", (req, res) => {
    req.on("error", handleRequestError);
    res.on("error", handleResponseError);
  })
  .on("error", handleServerError);

httpServer.listen(PORT);
process.stdout.write(`Server running on port ${makeBlue(PORT)}`);
