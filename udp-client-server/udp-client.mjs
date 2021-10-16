import dgram from "dgram";

const ip = "127.0.0.1";
const port = 3000;
const message = Buffer.from("Hello");
const client = dgram.createSocket("udp4");

client.send(message, port, ip, err => {
  if (err) {
    client.close();
    throw err;
  }
});
