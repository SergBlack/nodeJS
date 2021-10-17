import fs from "fs";
import https from "https";
import assert from "assert";

const makeBlue = text => `\x1b[34m${text}\x1b[0m`;

const { PATH_TO_CERT, PATH_TO_KEY } = process.env;
const PORT = Number(process.env.PORT) || 3005;

assert.ok(
  PATH_TO_CERT && PATH_TO_KEY,
  "Key or cert path not provided via env variable"
);

const server = https.createServer(
  { key: fs.readFileSync(PATH_TO_KEY), cert: fs.readFileSync(PATH_TO_CERT) },
  (req, res) => req.pipe(res)
);

server.listen(PORT);
process.stdout.write(`Server running on port ${makeBlue(PORT)}`);
