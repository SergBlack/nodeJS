import http2 from "http2";
import fs from "fs";

const makeBlue = text => `\x1b[34m${text}\x1b[0m`;

const PORT = Number(process.env.PORT) || 3005;
const { PATH_TO_CERT, PATH_TO_KEY } = process.env;
const { HTTP2_HEADER_STATUS, HTTP2_HEADER_CONTENT_TYPE } = http2.constants;

const options = {
  key: fs.readFileSync(PATH_TO_KEY),
  cert: fs.readFileSync(PATH_TO_CERT)
};

const http2Server = http2.createSecureServer(options);

http2Server.on("stream", stream => {
  stream.respond({
    [HTTP2_HEADER_STATUS]: 200,
    [HTTP2_HEADER_CONTENT_TYPE]: "text/plain"
  });

  stream.write("hello");
  stream.end("world");
});

http2Server.listen(PORT);
process.stdout.write(`Server running on port ${makeBlue(PORT)}`);
