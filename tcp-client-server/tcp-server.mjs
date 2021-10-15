import net from "net";

const onData = data => {
  console.log(`Request ===>> ${data}`);
};

const tcpServer = net.createServer(socket => {
  console.log(socket.address());
  socket.write("some data from server");
  socket.on("data", onData);
  socket.on("error", err => {
    console.log(`Socket error: ${err}`);
  });
}).listen(2000);

tcpServer.on("error", err => {
  console.log(`Server error: ${err}`);
});
