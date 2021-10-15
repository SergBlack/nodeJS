import net from "net";

const socket = new net.Socket();

const params = {
  port: 2000,
  host: "127.0.0.1"
};

socket.on("data", data => {
  console.log(`Response ===>> ${data}`);
});

socket.on("error", err => {
  console.log(`Socket error: ${err}`);
});

socket.connect(params, () => {
  socket.write("Request data to server");
});
