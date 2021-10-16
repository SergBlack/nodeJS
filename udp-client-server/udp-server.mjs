import dgram from "dgram";

const server = dgram.createSocket("udp4");

server.on("message", (message, info) => {
  console.log({ message: message.toString(), info });
});

server.bind(3000);
