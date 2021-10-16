import net from "net";

const connection = socket => {
  const {
    localAddress,
    localPort,
    remoteAddress,
    remoteFamily,
    remotePort,
    bufferSize,
    bytesRead,
    bytesWritten
  } = socket;

  console.log({
    localAddress,
    localPort,
    remoteAddress,
    remoteFamily,
    remotePort,
    bufferSize
  });

  socket.write("Some data from server");

  socket.on("data", data => {
    console.log("Event: data.\n", `Data is: ${data.toString()}`);
  });

  socket.on("drain", () => {
    console.log("Event: drain");
  });

  socket.on("end", () => {
    console.log("Event: end");
    console.log({ bytesRead, bytesWritten });
  });

  socket.on("error", err => {
    console.log("Event: error", err);
  });

  socket.on("timeout", () => {
    console.log("Event: timeout");
  });
};

const server = net.createServer();
server.on("connection", connection);
server.on("error", err => {
  console.log(`Server error: ${err}`);
});
server.listen(2000);
